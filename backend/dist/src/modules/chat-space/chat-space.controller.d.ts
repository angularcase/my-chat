import { type CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { ChatSpaceService } from './chat-space.service';
import { CreateChatSpaceDto } from './dto/create-chat-space.dto';
import { UpdateChatSpaceDto } from './dto/update-chat-space.dto';
export declare class ChatSpaceController {
    private readonly chatSpaceService;
    constructor(chatSpaceService: ChatSpaceService);
    create(user: CurrentUserPayload, dto: CreateChatSpaceDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        organizationId: string;
        widgetKey: string;
        allowedDomains: string[];
        settings: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    findAll(user: CurrentUserPayload): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        organizationId: string;
        widgetKey: string;
        allowedDomains: string[];
        settings: import("@prisma/client/runtime/library").JsonValue | null;
    }[]>;
    findOne(user: CurrentUserPayload, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        organizationId: string;
        widgetKey: string;
        allowedDomains: string[];
        settings: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    update(user: CurrentUserPayload, id: string, dto: UpdateChatSpaceDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        organizationId: string;
        widgetKey: string;
        allowedDomains: string[];
        settings: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    remove(user: CurrentUserPayload, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        organizationId: string;
        widgetKey: string;
        allowedDomains: string[];
        settings: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
}
