import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { ChatSpaceService } from '../modules/chat-space/chat-space.service';
import { SocketNamespacesService } from './socket-namespaces.service';
type AgentSocket = Socket & {
    agentId?: string;
    organizationId?: string;
    chatSpaceId?: string;
};
export declare class AgentGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly prisma;
    private readonly jwtService;
    private readonly redis;
    private readonly chatSpaceService;
    private readonly namespaces;
    server: Server;
    private readonly logger;
    constructor(prisma: PrismaService, jwtService: JwtService, redis: RedisService, chatSpaceService: ChatSpaceService, namespaces: SocketNamespacesService);
    afterInit(server: Server): void;
    handleConnection(client: AgentSocket): Promise<void>;
    handleDisconnect(client: AgentSocket): Promise<void>;
    handleJoinSpace(client: AgentSocket, payload: {
        chatSpaceId: string;
    }): Promise<void>;
    handleHeartbeat(client: AgentSocket): Promise<void>;
    handleAgentMessage(client: AgentSocket, payload: {
        threadId: string;
        content: string;
    }): Promise<void>;
    handleClaimThread(client: AgentSocket, payload: {
        threadId: string;
    }): Promise<void>;
}
export {};
