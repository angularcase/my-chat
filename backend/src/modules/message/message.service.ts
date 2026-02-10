import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ChatSpaceService } from '../chat-space/chat-space.service';
import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';

@Injectable()
export class MessageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly chatSpaceService: ChatSpaceService,
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
}
