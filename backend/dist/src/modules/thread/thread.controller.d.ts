import { ThreadStatus } from '@prisma/client';
import { type CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { ThreadService } from './thread.service';
export declare class ThreadController {
    private readonly threadService;
    constructor(threadService: ThreadService);
    findAll(user: CurrentUserPayload, chatSpaceId: string, status?: ThreadStatus): Promise<({
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
}
export declare class ThreadByIdController {
    private readonly threadService;
    constructor(threadService: ThreadService);
    findOne(user: CurrentUserPayload, id: string): Promise<{
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
    claim(user: CurrentUserPayload, id: string): Promise<{
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
    close(user: CurrentUserPayload, id: string): Promise<{
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
