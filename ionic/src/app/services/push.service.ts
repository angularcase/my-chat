import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { Preferences } from '@capacitor/preferences';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const KEY_FCM_TOKEN = 'mychat_fcm_token';

@Injectable({ providedIn: 'root' })
export class PushService {
  private readonly api = `${environment.apiUrl}/api`;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  async registerDeviceToken(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    const perm = await PushNotifications.requestPermissions();
    if (perm.receive !== 'granted') return;

    await PushNotifications.register();

    PushNotifications.addListener(
      'registration',
      async (ev: { value: string }) => {
        const token = ev.value;
        await Preferences.set({ key: KEY_FCM_TOKEN, value: token });
        const platform = Capacitor.getPlatform() === 'ios' ? 'ios' : 'android';
        try {
          await this.http
            .post(`${this.api}/devices/register`, { token, platform })
            .toPromise();
        } catch (e) {
          console.warn('Device register failed', e);
        }
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (ev: { notification: { data?: { threadId?: string } } }) => {
        const threadId = ev.notification?.data?.threadId;
        if (threadId) {
          this.router.navigate(['/thread-chat', threadId]);
        }
      }
    );
  }

  async unregisterDeviceToken(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    try {
      const { value } = await Preferences.get({ key: KEY_FCM_TOKEN });
      if (value) {
        await this.http
          .request('DELETE', `${this.api}/devices`, { body: { token: value } })
          .toPromise();
        await Preferences.remove({ key: KEY_FCM_TOKEN });
      }
    } catch (_) {}
  }
}
