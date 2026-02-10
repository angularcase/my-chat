import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { WebSocketService } from '../../services/websocket.service';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  password = '';
  error = '';
  loading = false;
  testResult = '';

  constructor(
    private readonly auth: AuthService,
    private readonly http: HttpClient,
    private readonly ws: WebSocketService,
    private readonly push: PushService,
    private readonly router: Router
  ) {}

  testConnection(): void {
    this.testResult = '';
    const url = `${environment.apiUrl}/api/health`;
    this.http.get<{ status?: string }>(url).subscribe({
      next: (res) => {
        this.testResult = `OK – backend działa (${url})`;
      },
      error: (err) => {
        this.testResult = `Błąd: ${err.status ?? 0} – ${err.message || 'unknown'}`;
      },
    });
  }

  async submit(): Promise<void> {
    this.error = '';
    if (!this.email.trim() || !this.password) {
      this.error = 'Wpisz email i hasło';
      return;
    }
    this.loading = true;
    this.auth.login(this.email.trim(), this.password).subscribe({
      next: async () => {
        await this.ws.connect();
        await this.push.registerDeviceToken();
        this.router.navigate(['/tabs/spaces']);
      },
      error: (err) => {
        this.loading = false;
        const status = err.status ?? err.statusCode;
        const msg =
          err.error?.message ||
          err.message ||
          err.error?.error ||
          (typeof err.error === 'string' ? err.error : null);
        if (status === 0 || err.name === 'HttpErrorResponse') {
          this.error =
            msg ||
            'Błąd sieci – sprawdź, czy backend działa i telefon jest w tej samej sieci Wi‑Fi';
        } else {
          this.error = msg || `Logowanie nie powiodło się (${status})`;
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
