"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AgentGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const redis_service_1 = require("../redis/redis.service");
const chat_space_service_1 = require("../modules/chat-space/chat-space.service");
const socket_namespaces_service_1 = require("./socket-namespaces.service");
const PRESENCE_TTL = 60;
let AgentGateway = AgentGateway_1 = class AgentGateway {
    prisma;
    jwtService;
    redis;
    chatSpaceService;
    namespaces;
    server;
    logger = new common_1.Logger(AgentGateway_1.name);
    constructor(prisma, jwtService, redis, chatSpaceService, namespaces) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.redis = redis;
        this.chatSpaceService = chatSpaceService;
        this.namespaces = namespaces;
    }
    afterInit(server) {
        this.namespaces.register('agent', server);
    }
    async handleConnection(client) {
        try {
            const token = client.handshake.auth?.token ??
                client.handshake.query?.token;
            if (!token) {
                client.emit('error', { message: 'Token required' });
                client.disconnect(true);
                return;
            }
            const payload = this.jwtService.verify(token, {
                secret: process.env.JWT_ACCESS_SECRET ?? 'access-secret',
            });
            const agent = await this.prisma.agent.findUnique({
                where: { id: payload.sub },
            });
            if (!agent || agent.organizationId !== payload.organizationId) {
                client.emit('error', { message: 'Invalid token' });
                client.disconnect(true);
                return;
            }
            client.agentId = agent.id;
            client.organizationId = agent.organizationId;
            await this.prisma.agent.update({
                where: { id: agent.id },
                data: { isOnline: true, lastSeenAt: new Date() },
            });
            await this.redis.setAgentOnline(agent.id, PRESENCE_TTL);
            client.emit('connected', {
                agentId: agent.id,
                organizationId: agent.organizationId,
            });
        }
        catch (err) {
            this.logger.warn('Agent connection error', err);
            client.emit('error', { message: 'Connection failed' });
            client.disconnect(true);
        }
    }
    async handleDisconnect(client) {
        if (client.agentId) {
            await this.prisma.agent
                .update({
                where: { id: client.agentId },
                data: { isOnline: false, lastSeenAt: new Date() },
            })
                .catch(() => { });
            await this.redis.setAgentOffline(client.agentId).catch(() => { });
            if (client.chatSpaceId) {
                this.namespaces.get('widget')?.to(`chatspace:${client.chatSpaceId}`).emit('agents:status', { hasOnline: false });
            }
        }
    }
    async handleJoinSpace(client, payload) {
        if (!client.agentId)
            return;
        const chatSpaceId = payload?.chatSpaceId;
        if (!chatSpaceId) {
            client.emit('error', { message: 'chatSpaceId required' });
            return;
        }
        await this.chatSpaceService.assertBelongsToOrganization(chatSpaceId, client.organizationId);
        client.chatSpaceId = chatSpaceId;
        client.join(`chatspace:${chatSpaceId}`);
        const onlineCount = await this.prisma.agent.count({
            where: { organizationId: client.organizationId, isOnline: true },
        });
        this.namespaces.get('widget')?.to(`chatspace:${chatSpaceId}`).emit('agents:status', { hasOnline: onlineCount > 0 });
        client.emit('joined_space', { chatSpaceId });
    }
    async handleHeartbeat(client) {
        if (client.agentId) {
            await this.redis.setAgentOnline(client.agentId, PRESENCE_TTL);
            await this.prisma.agent.update({
                where: { id: client.agentId },
                data: { lastSeenAt: new Date() },
            });
        }
    }
    async handleAgentMessage(client, payload) {
        if (!client.agentId) {
            client.emit('error', { message: 'Not authenticated' });
            return;
        }
        const threadId = payload?.threadId;
        const content = String(payload?.content ?? '').trim();
        if (!threadId || !content) {
            client.emit('error', { message: 'threadId and content required' });
            return;
        }
        try {
            const thread = await this.prisma.thread.findUnique({
                where: { id: threadId },
            });
            if (!thread ||
                thread.assignedAgentId !== client.agentId ||
                thread.status !== client_1.ThreadStatus.active) {
                client.emit('error', { message: 'Thread not found or not assigned to you' });
                return;
            }
            const message = await this.prisma.message.create({
                data: {
                    threadId,
                    senderType: client_1.MessageSenderType.agent,
                    senderId: client.agentId,
                    content,
                },
            });
            await this.prisma.thread.update({
                where: { id: threadId },
                data: { lastActivityAt: new Date() },
            });
            const payload = {
                id: message.id,
                content: message.content,
                createdAt: message.createdAt,
            };
            this.namespaces.get('widget')?.to(`thread:${threadId}`).emit('agent:message', payload);
            client.emit('message:sent', { id: message.id });
        }
        catch (err) {
            this.logger.warn('Agent message error', err);
            client.emit('error', { message: 'Failed to send message' });
        }
    }
    async handleClaimThread(client, payload) {
        if (!client.agentId)
            return;
        const threadId = payload?.threadId;
        if (!threadId) {
            client.emit('error', { message: 'threadId required' });
            return;
        }
        try {
            const thread = await this.prisma.thread.findUnique({
                where: { id: threadId },
            });
            if (!thread) {
                client.emit('error', { message: 'Thread not found' });
                return;
            }
            await this.chatSpaceService.assertBelongsToOrganization(thread.chatSpaceId, client.organizationId);
            if (thread.status !== client_1.ThreadStatus.unassigned) {
                client.emit('error', { message: 'Thread already assigned or closed' });
                return;
            }
            await this.prisma.thread.update({
                where: { id: threadId },
                data: { assignedAgentId: client.agentId, status: client_1.ThreadStatus.active },
            });
            this.server.to(`chatspace:${thread.chatSpaceId}`).emit('thread:updated', {
                threadId,
                assignedAgentId: client.agentId,
                status: client_1.ThreadStatus.active,
            });
            this.namespaces.get('widget')?.to(`thread:${threadId}`).emit('thread:assigned', { threadId });
            client.emit('thread:claimed', { threadId });
        }
        catch (err) {
            this.logger.warn('Claim thread error', err);
            client.emit('error', { message: 'Failed to claim thread' });
        }
    }
};
exports.AgentGateway = AgentGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], AgentGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('agent:join_space'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AgentGateway.prototype, "handleJoinSpace", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('agent:heartbeat'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgentGateway.prototype, "handleHeartbeat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('agent:send_message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AgentGateway.prototype, "handleAgentMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('agent:claim_thread'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AgentGateway.prototype, "handleClaimThread", null);
exports.AgentGateway = AgentGateway = AgentGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: 'agent',
        cors: { origin: true },
    }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        redis_service_1.RedisService,
        chat_space_service_1.ChatSpaceService,
        socket_namespaces_service_1.SocketNamespacesService])
], AgentGateway);
//# sourceMappingURL=agent.gateway.js.map