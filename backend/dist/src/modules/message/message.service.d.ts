import { PrismaService } from '../../prisma/prisma.service';
import { ChatSpaceService } from '../chat-space/chat-space.service';
import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';
export declare class MessageService {
    private readonly prisma;
    private readonly chatSpaceService;
    constructor(prisma: PrismaService, chatSpaceService: ChatSpaceService);
    findByThread(user: CurrentUserPayload, threadId: string, cursor?: string, take?: number): Promise<{
        messages: {
            id: string;
            createdAt: Date;
            threadId: string;
            senderType: import("@prisma/client").$Enums.MessageSenderType;
            senderId: string | null;
            content: string;
        }[];
        nextCursor: string | null;
    }>;
}
