import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { ThreadService } from '../../services/thread.service';
import { WebSocketService } from '../../services/websocket.service';
import type { Thread } from '../../models/interfaces';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.page.html',
  styleUrls: ['./threads.page.scss'],
  standalone: false,
})
export class ThreadsPage implements OnInit, OnDestroy {
  chatSpaceId = '';
  threads: Thread[] = [];
  loading = true;
  error = '';
  statusFilter: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly threadService: ThreadService,
    private readonly ws: WebSocketService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('chatSpaceId');
    if (!id) {
      this.router.navigate(['/tabs/spaces']);
      return;
    }
    this.chatSpaceId = id;
    this.ws.joinSpace(id);

    this.ws.threadNew$.pipe(takeUntil(this.destroy$)).subscribe(() => this.load());
    this.ws.threadUpdated$.pipe(takeUntil(this.destroy$)).subscribe(() => this.load());
    this.ws.visitorMessage$.pipe(takeUntil(this.destroy$)).subscribe(() => this.load());

    this.load();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load(): void {
    this.loading = true;
    const status =
      this.statusFilter === 'unassigned' ||
      this.statusFilter === 'active' ||
      this.statusFilter === 'closed'
        ? this.statusFilter
        : undefined;
    this.threadService.getByChatSpace(this.chatSpaceId, status).subscribe({
      next: (list) => {
        this.threads = list;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Nie udało się załadować wątków';
        this.loading = false;
      },
    });
  }

  filterStatus(value: unknown): void {
    this.statusFilter = value != null ? String(value) : '';
    this.load();
  }

  openChat(thread: Thread): void {
    this.router.navigate(['/thread-chat', thread.id]);
  }

  unassignedCount(): number {
    return this.threads.filter((t) => t.status === 'unassigned').length;
  }
}
