import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageSenderType, ThreadStatus } from '@prisma/client';
import { Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OriginValidatorService } from '../common/origin-validator.service';
import { SocketNamespacesService } from './socket-namespaces.service';

type WidgetSocket = Socket & {
  visitorId?: string;
  chatSpaceId?: string;
  threadId?: string;
};

@WebSocketGateway({
  namespace: 'widget',
  cors: { origin: true },
})
export class WidgetGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  afterInit(server: Server) {
    this.namespaces.register('widget', server);
  }

  private readonly logger = new Logger(WidgetGateway.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly originValidator: OriginValidatorService,
    private readonly namespaces: SocketNamespacesService,
  ) {}

  async handleConnection(client: WidgetSocket) {
    try {
      const auth = client.handshake.auth as {
        widgetKey?: string;
        sessionToken?: string;
      };
      const widgetKey = auth?.widgetKey ?? (client.handshake.query?.widgetKey as string);
      const sessionToken =
        auth?.sessionToken ?? (client.handshake.query?.sessionToken as string);

      this.logger.log(
        `Widget connection attempt – widgetKey=${widgetKey ?? '(none)'}, origin=${client.handshake.headers.origin ?? '(none)'}`,
      );

      if (!widgetKey || !sessionToken) {
        this.logger.warn('Rejected: missing widgetKey or sessionToken');
        client.emit('error', { message: 'widgetKey and sessionToken required' });
        client.disconnect(true);
        return;
      }

      const origin = client.handshake.headers.origin;
      const allowed = await this.originValidator.isOriginAllowed(
        origin,
        widgetKey,
      );
      if (!allowed) {
        this.logger.warn(
          `Rejected: origin "${origin}" not allowed for widgetKey="${widgetKey}"`,
        );
        client.emit('error', { message: 'Origin not allowed' });
        client.disconnect(true);
        return;
      }

      const space = await this.prisma.chatSpace.findUnique({
        where: { widgetKey },
      });
      if (!space) {
        this.logger.warn(`Rejected: invalid widgetKey="${widgetKey}"`);
        client.emit('error', { message: 'Invalid widget key' });
        client.disconnect(true);
        return;
      }

      // Find or create visitor. Handle the case where the sessionToken
      // already exists for a different chatSpace (unique constraint).
      let visitor = await this.prisma.visitor.findUnique({
        where: { sessionToken },
      });
      if (!visitor) {
        visitor = await this.prisma.visitor.create({
          data: {
            chatSpaceId: space.id,
            sessionToken,
          },
        });
      } else if (visitor.chatSpaceId !== space.id) {
        // Same browser session, different chatSpace – update the chatSpaceId
        visitor = await this.prisma.visitor.update({
          where: { id: visitor.id },
          data: { chatSpaceId: space.id },
        });
      }

      client.visitorId = visitor.id;
      client.chatSpaceId = space.id;

      const activeThread = await this.prisma.thread.findFirst({
        where: {
          visitorId: visitor.id,
          status: { in: [ThreadStatus.unassigned, ThreadStatus.active] },
        },
        orderBy: { lastActivityAt: 'desc' },
      });
      let recentMessages: {
        id: string;
        content: string;
        senderType: string;
        createdAt: Date;
      }[] = [];

      if (activeThread) {
        client.threadId = activeThread.id;
        client.join(`thread:${activeThread.id}`);

        // Load recent message history so the widget can restore the conversation.
        recentMessages = await this.prisma.message.findMany({
          where: { threadId: activeThread.id },
          orderBy: { createdAt: 'asc' },
          take: 50,
          select: {
            id: true,
            content: true,
            senderType: true,
            createdAt: true,
          },
        });
      }
      client.join(`visitor:${visitor.id}`);
      client.join(`chatspace:${space.id}`);

      this.logger.log(
        `Widget connected – visitor=${visitor.id}, chatSpace=${space.id}, thread=${activeThread?.id ?? '(new)'}, messages=${recentMessages.length}`,
      );

      client.emit('connected', {
        visitorId: visitor.id,
        threadId: activeThread?.id ?? null,
        chatSpaceId: space.id,
        messages: recentMessages,
      });
    } catch (err) {
      this.logger.error('Widget connection error', err);
      client.emit('error', { message: 'Connection failed' });
      client.disconnect(true);
    }
  }

  handleDisconnect(_client: WidgetSocket) {
    // no-op; visitor stays in DB
  }

  @SubscribeMessage('visitor:send_message')
  async handleVisitorMessage(
    @ConnectedSocket() client: WidgetSocket,
    @MessageBody() payload: { content: string },
  ) {
    if (!client.visitorId || !client.chatSpaceId) {
      client.emit('error', { message: 'Not authenticated' });
      return;
    }
    const content = String(payload?.content ?? '').trim();
    if (!content) {
      client.emit('error', { message: 'Content required' });
      return;
    }

    try {
      let threadId = client.threadId;
      if (!threadId) {
        const thread = await this.prisma.thread.create({
          data: {
            chatSpaceId: client.chatSpaceId,
            visitorId: client.visitorId,
            status: ThreadStatus.unassigned,
          },
        });
        threadId = thread.id;
        client.threadId = threadId;
        client.join(`thread:${threadId}`);
        this.logger.log(
          `New thread created – thread=${threadId}, visitor=${client.visitorId}, chatSpace=${client.chatSpaceId}`,
        );
        const threadPayload = { threadId: thread.id, visitorId: client.visitorId };
        this.server.to(`chatspace:${client.chatSpaceId}`).emit('thread:new', threadPayload);
        this.namespaces.get('agent')?.to(`chatspace:${client.chatSpaceId}`).emit('thread:new', threadPayload);
      }

      this.logger.log(
        `💬 Visitor message – thread=${threadId}, visitor=${client.visitorId}: "${content}"`,
      );

      const message = await this.prisma.message.create({
        data: {
          threadId,
          senderType: MessageSenderType.visitor,
          senderId: client.visitorId,
          content,
        },
      });
      await this.prisma.thread.update({
        where: { id: threadId },
        data: { lastActivityAt: new Date() },
      });

      const msgPayload = {
        id: message.id,
        content: message.content,
        createdAt: message.createdAt,
        threadId,
      };
      client.emit('message:confirmed', {
        id: message.id,
        content: message.content,
        createdAt: message.createdAt,
      });
      this.server.to(`thread:${threadId}`).emit('visitor:message', msgPayload);
      this.namespaces.get('agent')?.to(`chatspace:${client.chatSpaceId}`).emit('visitor:message', msgPayload);
    } catch (err) {
      this.logger.warn('Visitor message error', err);
      client.emit('error', { message: 'Failed to send message' });
    }
  }

  /** Push agent message to visitor (called from agent gateway). */
  async sendAgentMessage(threadId: string, payload: { id: string; content: string; createdAt: Date }) {
    this.server.to(`thread:${threadId}`).emit('agent:message', payload);
  }

  /** Notify widget that thread was assigned. */
  notifyThreadAssigned(threadId: string) {
    this.server.to(`thread:${threadId}`).emit('thread:assigned', { threadId });
  }

  /** Notify widgets in chat space about agent online status. */
  sendAgentsStatus(chatSpaceId: string, hasOnline: boolean) {
    this.server.to(`chatspace:${chatSpaceId}`).emit('agents:status', { hasOnline });
  }
}
