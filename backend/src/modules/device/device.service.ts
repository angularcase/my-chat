import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { RegisterDeviceDto } from './dto/register-device.dto';

@Injectable()
export class DeviceService {
  constructor(private readonly prisma: PrismaService) {}

  async register(user: CurrentUserPayload, dto: RegisterDeviceDto) {
    await this.prisma.deviceToken.upsert({
      where: { token: dto.token },
      create: {
        agentId: user.id,
        token: dto.token,
        platform: dto.platform,
      },
      update: {
        agentId: user.id,
        platform: dto.platform,
      },
    });
    return { registered: true };
  }

  async unregister(user: CurrentUserPayload, token: string) {
    await this.prisma.deviceToken.deleteMany({
      where: {
        token,
        agentId: user.id,
      },
    });
    return { unregistered: true };
  }

  async getTokensByAgentIds(agentIds: string[]): Promise<{ token: string; platform: string }[]> {
    if (agentIds.length === 0) return [];
    const devices = await this.prisma.deviceToken.findMany({
      where: { agentId: { in: agentIds } },
      select: { token: true, platform: true },
    });
    return devices;
  }

  async getTokensForOrganization(organizationId: string): Promise<{ token: string; platform: string }[]> {
    const agents = await this.prisma.agent.findMany({
      where: { organizationId },
      select: { id: true },
    });
    const agentIds = agents.map((a) => a.id);
    return this.getTokensByAgentIds(agentIds);
  }
}
