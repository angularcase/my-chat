import { type CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { MessageService } from './message.service';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(user: CurrentUserPayload, threadId: string, cursor?: string, take?: string): Promise<{
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
