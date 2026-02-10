import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
import { OriginValidatorService } from '../common/origin-validator.service';
import { SocketNamespacesService } from './socket-namespaces.service';
type WidgetSocket = Socket & {
    visitorId?: string;
    chatSpaceId?: string;
    threadId?: string;
};
export declare class WidgetGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly prisma;
    private readonly originValidator;
    private readonly namespaces;
    server: Server;
    afterInit(server: Server): void;
    private readonly logger;
    constructor(prisma: PrismaService, originValidator: OriginValidatorService, namespaces: SocketNamespacesService);
    handleConnection(client: WidgetSocket): Promise<void>;
    handleDisconnect(_client: WidgetSocket): void;
    handleVisitorMessage(client: WidgetSocket, payload: {
        content: string;
    }): Promise<void>;
    sendAgentMessage(threadId: string, payload: {
        id: string;
        content: string;
        createdAt: Date;
    }): Promise<void>;
    notifyThreadAssigned(threadId: string): void;
    sendAgentsStatus(chatSpaceId: string, hasOnline: boolean): void;
}
export {};
