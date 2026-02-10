import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private socket: Socket | null = null;
  private readonly wsUrl = environment.apiUrl;

  readonly threadNew$ = new Subject<{ threadId: string; visitorId: string }>();
  readonly threadUpdated$ = new Subject<{
    threadId: string;
    assignedAgentId: string;
    status: string;
  }>();
  readonly visitorMessage$ = new Subject<{
    threadId: string;
    id: string;
    content: string;
    createdAt: string;
  }>();

  constructor(private readonly auth: AuthService) {}

  async connect(): Promise<void> {
    const token = await this.auth.getAccessToken();
    if (!token) return;

    if (this.socket?.connected) return;

    this.socket = io(`${this.wsUrl}/agent`, {
      auth: { token },
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connected', () => {});
    this.socket.on('error', (e: { message: string }) =>
      console.warn('WS error', e.message)
    );
    this.socket.on('thread:new', (p: { threadId: string; visitorId: string }) =>
      this.threadNew$.next(p)
    );
    this.socket.on(
      'thread:updated',
      (p: { threadId: string; assignedAgentId: string; status: string }) =>
        this.threadUpdated$.next(p)
    );
    this.socket.on(
      'visitor:message',
      (p: { threadId: string; id: string; content: string; createdAt: string }) =>
        this.visitorMessage$.next(p)
    );

    const heartbeat = setInterval(() => {
      if (this.socket?.connected) this.socket.emit('agent:heartbeat');
    }, 30000);
    this.socket.on('disconnect', () => clearInterval(heartbeat));
  }

  joinSpace(chatSpaceId: string): void {
    this.socket?.emit('agent:join_space', { chatSpaceId });
  }

  sendMessage(threadId: string, content: string): void {
    this.socket?.emit('agent:send_message', { threadId, content });
  }

  claimThread(threadId: string): void {
    this.socket?.emit('agent:claim_thread', { threadId });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}
