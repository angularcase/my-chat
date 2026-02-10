import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DeviceService } from './device.service';

export type PushPayload = {
  threadId: string;
  chatSpaceId: string;
  title?: string;
  body?: string;
};

@Injectable()
export class PushNotificationService implements OnModuleInit {
  private readonly logger = new Logger(PushNotificationService.name);
  private messaging: import('firebase-admin/messaging').Messaging | null = null;

  constructor(private readonly deviceService: DeviceService) {}

  onModuleInit() {
    try {
      let credential: object | undefined;
      if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
        credential = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON) as object;
      }
      if (!credential && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        this.logger.warn(
          'Push notifications disabled: set FIREBASE_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS',
        );
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const admin = require('firebase-admin');
      if (!admin.apps?.length) {
        admin.initializeApp(
          credential ? { credential: admin.credential.cert(credential) } : {},
        );
      }
      this.messaging = admin.messaging();
      this.logger.log('Firebase Admin initialized for push notifications');
    } catch (err) {
      this.logger.warn('Failed to initialize Firebase Admin', err);
    }
  }

  /**
   * Send push notifications to all agents of the organization that owns the given chat space.
   * Called when a visitor sends a message so agents can be notified.
   */
  async notifyAgentsNewMessage(organizationId: string, payload: PushPayload): Promise<void> {
    if (!this.messaging) return;
    try {
      const devices = await this.deviceService.getTokensForOrganization(organizationId);
      if (devices.length === 0) return;
      const tokens = devices.map((d) => d.token);
      const title = payload.title ?? 'New chat message';
      const body = payload.body ?? 'Someone wrote on the website';
      await this.messaging.sendEachForMulticast({
        tokens,
        notification: { title, body },
        data: {
          threadId: payload.threadId,
          chatSpaceId: payload.chatSpaceId,
        },
        android: { priority: 'high' },
        apns: { payload: { aps: { sound: 'default' } } },
      });
      this.logger.log(`Push sent to ${tokens.length} device(s) for thread ${payload.threadId}`);
    } catch (err) {
      this.logger.error('Failed to send push notifications', err);
    }
  }
}
