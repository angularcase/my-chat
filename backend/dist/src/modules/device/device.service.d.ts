import { PrismaService } from '../../prisma/prisma.service';
import type { CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { RegisterDeviceDto } from './dto/register-device.dto';
export declare class DeviceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(user: CurrentUserPayload, dto: RegisterDeviceDto): Promise<{
        registered: boolean;
    }>;
    unregister(user: CurrentUserPayload, token: string): Promise<{
        unregistered: boolean;
    }>;
    getTokensByAgentIds(agentIds: string[]): Promise<{
        token: string;
        platform: string;
    }[]>;
    getTokensForOrganization(organizationId: string): Promise<{
        token: string;
        platform: string;
    }[]>;
}
