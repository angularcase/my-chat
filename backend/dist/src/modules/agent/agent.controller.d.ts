import { type CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { RedisService } from '../../redis/redis.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class AgentController {
    private readonly prisma;
    private readonly redis;
    constructor(prisma: PrismaService, redis: RedisService);
    updateMyStatus(user: CurrentUserPayload, dto: UpdateStatusDto): Promise<{
        isOnline: boolean;
    }>;
}
