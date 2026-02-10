import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StatusService } from '../../services/status.service';
import { AuthService } from '../../services/auth.service';
import { WebSocketService } from '../../services/websocket.service';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {
  isOnline = true;
  savingStatus = false;

  constructor(
    private readonly statusService: StatusService,
    private readonly auth: AuthService,
    private readonly ws: WebSocketService,
    private readonly push: PushService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  toggleStatus(): void {
    this.savingStatus = true;
    this.statusService.setOnline(this.isOnline).subscribe({
      next: (res) => {
        this.isOnline = res.isOnline;
        this.savingStatus = false;
      },
      error: () => {
        this.savingStatus = false;
      },
    });
  }

  logout(): void {
    this.ws.disconnect();
    this.push.unregisterDeviceToken();
    this.auth.clearTokens();
    this.router.navigate(['/login']);
  }
}
