import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateChatSpaceDto } from './dto/create-chat-space.dto';
import { UpdateChatSpaceDto } from './dto/update-chat-space.dto';
import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';

@Injectable()
export class ChatSpaceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CurrentUserPayload, dto: CreateChatSpaceDto) {
    const widgetKey = crypto.randomUUID();
    return this.prisma.chatSpace.create({
      data: {
        organizationId: user.organizationId,
        name: dto.name,
        widgetKey,
        allowedDomains: dto.allowedDomains ?? [],
      },
    });
  }

  async findAll(user: CurrentUserPayload) {
    return this.prisma.chatSpace.findMany({
      where: { organizationId: user.organizationId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(user: CurrentUserPayload, id: string) {
    const space = await this.prisma.chatSpace.findUnique({
      where: { id },
    });
    if (!space || space.organizationId !== user.organizationId) {
      throw new NotFoundException('Chat space not found');
    }
    return space;
  }

  async findByWidgetKey(widgetKey: string) {
    return this.prisma.chatSpace.findUnique({
      where: { widgetKey },
    });
  }

  async update(user: CurrentUserPayload, id: string, dto: UpdateChatSpaceDto) {
    await this.findOne(user, id);
    return this.prisma.chatSpace.update({
      where: { id },
      data: {
        ...(dto.name != null && { name: dto.name }),
        ...(dto.allowedDomains != null && { allowedDomains: dto.allowedDomains }),
      },
    });
  }

  async remove(user: CurrentUserPayload, id: string) {
    await this.findOne(user, id);
    return this.prisma.chatSpace.delete({ where: { id } });
  }

  async assertBelongsToOrganization(
    chatSpaceId: string,
    organizationId: string,
  ): Promise<void> {
    const space = await this.prisma.chatSpace.findUnique({
      where: { id: chatSpaceId },
    });
    if (!space || space.organizationId !== organizationId) {
      throw new ForbiddenException('Chat space does not belong to your organization');
    }
  }
}
