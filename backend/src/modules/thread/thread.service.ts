import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ThreadStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { ChatSpaceService } from '../chat-space/chat-space.service';
import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';

@Injectable()
export class ThreadService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly chatSpaceService: ChatSpaceService,
  ) {}

  async findAllByChatSpace(
    user: CurrentUserPayload,
    chatSpaceId: string,
    status?: ThreadStatus,
  ) {
    await this.chatSpaceService.assertBelongsToOrganization(
      chatSpaceId,
      user.organizationId,
    );
    return this.prisma.thread.findMany({
      where: {
        chatSpaceId,
        ...(status != null && { status }),
      },
      include: {
        visitor: { select: { id: true, displayName: true, email: true } },
        agent: { select: { id: true, displayName: true, email: true } },
        _count: { select: { messages: true } },
      },
      orderBy: { lastActivityAt: 'desc' },
    });
  }

  async claim(user: CurrentUserPayload, threadId: string) {
    const thread = await this.prisma.thread.findUnique({
      where: { id: threadId },
    });
    if (!thread) {
      throw new NotFoundException('Thread not found');
    }
    await this.chatSpaceService.assertBelongsToOrganization(
      thread.chatSpaceId,
      user.organizationId,
    );
    if (thread.status !== ThreadStatus.unassigned) {
      throw new BadRequestException('Thread is already assigned or closed');
    }
    return this.prisma.thread.update({
      where: { id: threadId },
      data: {
        assignedAgentId: user.id,
        status: ThreadStatus.active,
      },
      include: {
        visitor: { select: { id: true, displayName: true, email: true } },
      },
    });
  }

  async close(user: CurrentUserPayload, threadId: string) {
    const thread = await this.prisma.thread.findUnique({
      where: { id: threadId },
    });
    if (!thread) {
      throw new NotFoundException('Thread not found');
    }
    await this.chatSpaceService.assertBelongsToOrganization(
      thread.chatSpaceId,
      user.organizationId,
    );
    return this.prisma.thread.update({
      where: { id: threadId },
      data: { status: ThreadStatus.closed },
    });
  }

  async findOne(user: CurrentUserPayload, threadId: string) {
    const thread = await this.prisma.thread.findUnique({
      where: { id: threadId },
      include: {
        visitor: { select: { id: true, displayName: true, email: true } },
        agent: { select: { id: true, displayName: true, email: true } },
      },
    });
    if (!thread) {
      throw new NotFoundException('Thread not found');
    }
    await this.chatSpaceService.assertBelongsToOrganization(
      thread.chatSpaceId,
      user.organizationId,
    );
    return thread;
  }
}
