import { Injectable } from '@nestjs/common';
import { MessageSenderType, ThreadStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { SocketNamespacesService } from '../../gateway/socket-namespaces.service';
import { ChatSpaceService } from '../chat-space/chat-space.service';
import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';

@Injectable()
export class MessageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly chatSpaceService: ChatSpaceService,
    private readonly namespaces: SocketNamespacesService,
  ) {}

  async findByThread(
    user: CurrentUserPayload,
    threadId: string,
    cursor?: string,
    take = 50,
  ) {
    const thread = await this.prisma.thread.findUnique({
      where: { id: threadId },
    });
    if (!thread) {
      return { messages: [], nextCursor: null };
    }
    await this.chatSpaceService.assertBelongsToOrganization(
      thread.chatSpaceId,
      user.organizationId,
    );

    const messages = await this.prisma.message.findMany({
      where: { threadId },
      take: take + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      orderBy: { createdAt: 'asc' },
    });

    const hasMore = messages.length > take;
    const nextCursor = hasMore ? messages[take - 1]?.id ?? null : null;
    const list = hasMore ? messages.slice(0, take) : messages;

    return {
      messages: list,
      nextCursor,
    };
  }

  async sendMessage(
    user: CurrentUserPayload,
    threadId: string,
    content: string,
  ) {
    if (!content) {
      return { id: null, error: 'Content required' };
    }
    const thread = await this.prisma.thread.findUnique({
      where: { id: threadId },
    });
    if (!thread) {
      return { id: null, error: 'Thread not found' };
    }
    await this.chatSpaceService.assertBelongsToOrganization(
      thread.chatSpaceId,
      user.organizationId,
    );
    if (thread.assignedAgentId !== user.id || thread.status !== ThreadStatus.active) {
      return { id: null, error: 'Thread not found or not assigned to you' };
    }

    const message = await this.prisma.message.create({
      data: {
        threadId,
        senderType: MessageSenderType.agent,
        senderId: user.id,
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

    return { id: message.id };
  }
}
