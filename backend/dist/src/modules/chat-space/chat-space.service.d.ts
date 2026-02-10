import { PrismaService } from '../../prisma/prisma.service';
import { CreateChatSpaceDto } from './dto/create-chat-space.dto';
import { UpdateChatSpaceDto } from './dto/update-chat-space.dto';
import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';
export declare class ChatSpaceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findByWidgetKey(widgetKey: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        organizationId: string;
        widgetKey: string;
        allowedDomains: string[];
        settings: import("@prisma/client/runtime/library").JsonValue | null;
    } | null>;
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
    assertBelongsToOrganization(chatSpaceId: string, organizationId: string): Promise<void>;
}
