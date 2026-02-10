import { Body, Controller, Patch } from '@nestjs/common';
import {
  CurrentUser,
  type CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { RedisService } from '../../redis/redis.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateStatusDto } from './dto/update-status.dto';

const PRESENCE_TTL = 60;

@Controller('agents')
export class AgentController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Patch('me/status')
  async updateMyStatus(
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: UpdateStatusDto,
  ) {
    await this.prisma.agent.update({
      where: { id: user.id },
      data: {
        isOnline: dto.isOnline,
        lastSeenAt: new Date(),
      },
    });
    if (dto.isOnline) {
      await this.redis.setAgentOnline(user.id, PRESENCE_TTL);
    } else {
      await this.redis.setAgentOffline(user.id);
    }
    return { isOnline: dto.isOnline };
  }
}
