import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { ThreadService } from '../../services/thread.service';
import { MessageService } from '../../services/message.service';
import { WebSocketService } from '../../services/websocket.service';
import type { Thread } from '../../models/interfaces';
import type { Message } from '../../models/interfaces';

@Component({
  selector: 'app-thread-chat',
  templateUrl: './thread-chat.page.html',
  styleUrls: ['./thread-chat.page.scss'],
  standalone: false,
})
export class ThreadChatPage implements OnInit, OnDestroy {
  threadId = '';
  thread: Thread | null = null;
  messages: Message[] = [];
  newMessage = '';
  loading = true;
  claiming = false;
  sending = false;
  error = '';
  private destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly threadService: ThreadService,
    private readonly messageService: MessageService,
    private readonly ws: WebSocketService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('threadId');
    if (!id) {
      this.router.navigate(['/tabs/spaces']);
      return;
    }
    this.threadId = id;

    this.ws.visitorMessage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((msg) => {
        if (msg.threadId === this.threadId) {
          this.messages = [
            ...this.messages,
            {
              id: msg.id,
              threadId: msg.threadId,
              senderType: 'visitor',
              senderId: null,
              content: msg.content,
              createdAt: msg.createdAt,
            },
          ];
        }
      });

    this.threadService.getOne(this.threadId).subscribe({
      next: (t) => {
        this.thread = t;
        this.loadMessages();
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Nie znaleziono wątku';
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMessages(): void {
    this.messageService.getByThread(this.threadId).subscribe({
      next: (res) => {
        this.messages = res.items || [];
      },
    });
  }

  claim(): void {
    if (!this.thread || this.thread.status !== 'unassigned') return;
    this.claiming = true;
    this.threadService.claim(this.threadId).subscribe({
      next: (t) => {
        this.thread = t;
        this.claiming = false;
      },
      error: () => {
        this.claiming = false;
      },
    });
  }

  send(): void {
    const content = this.newMessage.trim();
    if (!content || this.sending) return;
    this.sending = true;
    this.newMessage = '';
    this.ws.sendMessage(this.threadId, content);
    this.messages = [
      ...this.messages,
      {
        id: '',
        threadId: this.threadId,
        senderType: 'agent',
        senderId: null,
        content,
        createdAt: new Date().toISOString(),
      },
    ];
    this.sending = false;
  }

  closeThread(): void {
    this.threadService.close(this.threadId).subscribe({
      next: (t) => {
        this.thread = t;
        this.router.navigate(['/tabs/spaces']);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/tabs/spaces']);
  }
}
