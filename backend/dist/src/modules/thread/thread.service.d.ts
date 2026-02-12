import { ThreadStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { ChatSpaceService } from '../chat-space/chat-space.service';
import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';
export declare class ThreadService {
    private readonly prisma;
    private readonly chatSpaceService;
    constructor(prisma: PrismaService, chatSpaceService: ChatSpaceService);
    findAllByChatSpace(user: CurrentUserPayload, chatSpaceId: string, status?: ThreadStatus): Promise<({
        visitor: {
            id: string;
            email: string | null;
            displayName: string | null;
        };
        agent: {
            id: string;
            email: string;
            displayName: string | null;
        } | null;
        _count: {
            messages: number;
        };
    } & {
        id: string;
        chatSpaceId: string;
        visitorId: string;
        assignedAgentId: string | null;
        status: import("@prisma/client").$Enums.ThreadStatus;
        lastActivityAt: Date;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    claim(user: CurrentUserPayload, threadId: string): Promise<{
        visitor: {
            id: string;
            email: string | null;
            displayName: string | null;
        };
    } & {
        id: string;
        chatSpaceId: string;
        visitorId: string;
        assignedAgentId: string | null;
        status: import("@prisma/client").$Enums.ThreadStatus;
        lastActivityAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    close(user: CurrentUserPayload, threadId: string): Promise<{
        id: string;
        chatSpaceId: string;
        visitorId: string;
        assignedAgentId: string | null;
        status: import("@prisma/client").$Enums.ThreadStatus;
        lastActivityAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(user: CurrentUserPayload, threadId: string): Promise<{
        visitor: {
            id: string;
            email: string | null;
            displayName: string | null;
        };
        agent: {
            id: string;
            email: string;
            displayName: string | null;
        } | null;
    } & {
        id: string;
        chatSpaceId: string;
        visitorId: string;
        assignedAgentId: string | null;
        status: import("@prisma/client").$Enums.ThreadStatus;
        lastActivityAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
