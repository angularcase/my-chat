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
import { Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MessageSenderType, ThreadStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { ChatSpaceService } from '../modules/chat-space/chat-space.service';
import { SocketNamespacesService } from './socket-namespaces.service';

const PRESENCE_TTL = 60;

type AgentSocket = Socket & {
  agentId?: string;
  organizationId?: string;
  chatSpaceId?: string;
};

@WebSocketGateway({
  namespace: 'agent',
  cors: { origin: true },
})
export class AgentGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  private readonly logger = new Logger(AgentGateway.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly redis: RedisService,
    private readonly chatSpaceService: ChatSpaceService,
    private readonly namespaces: SocketNamespacesService,
  ) {}

  afterInit(server: Server) {
    this.namespaces.register('agent', server);
  }

  async handleConnection(client: AgentSocket) {
    try {
      const token =
        (client.handshake.auth as { token?: string })?.token ??
        (client.handshake.query?.token as string);
      if (!token) {
        client.emit('error', { message: 'Token required' });
        client.disconnect(true);
        return;
      }
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET ?? 'access-secret',
      }) as { sub: string; organizationId: string };
      const agent = await this.prisma.agent.findUnique({
        where: { id: payload.sub },
      });
      if (!agent || agent.organizationId !== payload.organizationId) {
        client.emit('error', { message: 'Invalid token' });
        client.disconnect(true);
        return;
      }

      client.agentId = agent.id;
      client.organizationId = agent.organizationId;

      await this.prisma.agent.update({
        where: { id: agent.id },
        data: { isOnline: true, lastSeenAt: new Date() },
      });
      await this.redis.setAgentOnline(agent.id, PRESENCE_TTL);

      client.emit('connected', {
        agentId: agent.id,
        organizationId: agent.organizationId,
      });
    } catch (err) {
      this.logger.warn('Agent connection error', err);
      client.emit('error', { message: 'Connection failed' });
      client.disconnect(true);
    }
  }

  async handleDisconnect(client: AgentSocket) {
    if (client.agentId) {
      await this.prisma.agent
        .update({
          where: { id: client.agentId },
          data: { isOnline: false, lastSeenAt: new Date() },
        })
        .catch(() => {});
      await this.redis.setAgentOffline(client.agentId).catch(() => {});
      if (client.chatSpaceId) {
        this.namespaces.get('widget')?.to(`chatspace:${client.chatSpaceId}`).emit('agents:status', { hasOnline: false });
      }
    }
  }

  @SubscribeMessage('agent:join_space')
  async handleJoinSpace(
    @ConnectedSocket() client: AgentSocket,
    @MessageBody() payload: { chatSpaceId: string },
  ) {
    if (!client.agentId) return;
    const chatSpaceId = payload?.chatSpaceId;
    if (!chatSpaceId) {
      client.emit('error', { message: 'chatSpaceId required' });
      return;
    }
    await this.chatSpaceService.assertBelongsToOrganization(
      chatSpaceId,
      client.organizationId!,
    );
    client.chatSpaceId = chatSpaceId;
    client.join(`chatspace:${chatSpaceId}`);
    const onlineCount = await this.prisma.agent.count({
      where: { organizationId: client.organizationId!, isOnline: true },
    });
    this.namespaces.get('widget')?.to(`chatspace:${chatSpaceId}`).emit('agents:status', { hasOnline: onlineCount > 0 });
    client.emit('joined_space', { chatSpaceId });
  }

  @SubscribeMessage('agent:heartbeat')
  async handleHeartbeat(@ConnectedSocket() client: AgentSocket) {
    if (client.agentId) {
      await this.redis.setAgentOnline(client.agentId, PRESENCE_TTL);
      await this.prisma.agent.update({
        where: { id: client.agentId },
        data: { lastSeenAt: new Date() },
      });
    }
  }

  @SubscribeMessage('agent:send_message')
  async handleAgentMessage(
    @ConnectedSocket() client: AgentSocket,
    @MessageBody() payload: { threadId: string; content: string },
  ) {
    if (!client.agentId) {
      client.emit('error', { message: 'Not authenticated' });
      return;
    }
    const threadId = payload?.threadId;
    const content = String(payload?.content ?? '').trim();
    if (!threadId || !content) {
      client.emit('error', { message: 'threadId and content required' });
      return;
    }

    try {
      const thread = await this.prisma.thread.findUnique({
        where: { id: threadId },
      });
      if (
        !thread ||
        thread.assignedAgentId !== client.agentId ||
        thread.status !== ThreadStatus.active
      ) {
        client.emit('error', { message: 'Thread not found or not assigned to you' });
        return;
      }

      const message = await this.prisma.message.create({
        data: {
          threadId,
          senderType: MessageSenderType.agent,
          senderId: client.agentId,
          content,
        },
      });
      await this.prisma.thread.update({
        where: { id: threadId },
        data: { lastActivityAt: new Date() },
      });

      const payload = {
        id: message.id,
        content: message.content,
        createdAt: message.createdAt,
      };
      this.namespaces.get('widget')?.to(`thread:${threadId}`).emit('agent:message', payload);
      client.emit('message:sent', { id: message.id });
    } catch (err) {
      this.logger.warn('Agent message error', err);
      client.emit('error', { message: 'Failed to send message' });
    }
  }

  @SubscribeMessage('agent:claim_thread')
  async handleClaimThread(
    @ConnectedSocket() client: AgentSocket,
    @MessageBody() payload: { threadId: string },
  ) {
    if (!client.agentId) return;
    const threadId = payload?.threadId;
    if (!threadId) {
      client.emit('error', { message: 'threadId required' });
      return;
    }
    try {
      const thread = await this.prisma.thread.findUnique({
        where: { id: threadId },
      });
      if (!thread) {
        client.emit('error', { message: 'Thread not found' });
        return;
      }
      await this.chatSpaceService.assertBelongsToOrganization(
        thread.chatSpaceId,
        client.organizationId!,
      );
      if (thread.status !== ThreadStatus.unassigned) {
        client.emit('error', { message: 'Thread already assigned or closed' });
        return;
      }

      await this.prisma.thread.update({
        where: { id: threadId },
        data: { assignedAgentId: client.agentId, status: ThreadStatus.active },
      });

      this.server.to(`chatspace:${thread.chatSpaceId}`).emit('thread:updated', {
        threadId,
        assignedAgentId: client.agentId,
        status: ThreadStatus.active,
      });
      this.namespaces.get('widget')?.to(`thread:${threadId}`).emit('thread:assigned', { threadId });
      client.emit('thread:claimed', { threadId });
    } catch (err) {
      this.logger.warn('Claim thread error', err);
      client.emit('error', { message: 'Failed to claim thread' });
    }
  }
}
