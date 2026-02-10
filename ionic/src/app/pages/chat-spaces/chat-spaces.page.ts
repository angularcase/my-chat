import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatSpaceService } from '../../services/chat-space.service';
import type { ChatSpace } from '../../models/interfaces';

@Component({
  selector: 'app-chat-spaces',
  templateUrl: './chat-spaces.page.html',
  styleUrls: ['./chat-spaces.page.scss'],
  standalone: false,
})
export class ChatSpacesPage implements OnInit {
  spaces: ChatSpace[] = [];
  loading = true;
  error = '';

  constructor(
    private readonly chatSpaceService: ChatSpaceService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.chatSpaceService.getAll().subscribe({
      next: (list) => {
        this.spaces = list;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Nie udało się załadować listy';
        this.loading = false;
      },
    });
  }

  openThreads(space: ChatSpace): void {
    this.router.navigate(['/threads', space.id]);
  }
}
