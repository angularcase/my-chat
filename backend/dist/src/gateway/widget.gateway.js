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
var WidgetGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const origin_validator_service_1 = require("../common/origin-validator.service");
const socket_namespaces_service_1 = require("./socket-namespaces.service");
let WidgetGateway = WidgetGateway_1 = class WidgetGateway {
    prisma;
    originValidator;
    namespaces;
    server;
    afterInit(server) {
        this.namespaces.register('widget', server);
    }
    logger = new common_1.Logger(WidgetGateway_1.name);
    constructor(prisma, originValidator, namespaces) {
        this.prisma = prisma;
        this.originValidator = originValidator;
        this.namespaces = namespaces;
    }
    async handleConnection(client) {
        try {
            const auth = client.handshake.auth;
            const widgetKey = auth?.widgetKey ?? client.handshake.query?.widgetKey;
            const sessionToken = auth?.sessionToken ?? client.handshake.query?.sessionToken;
            this.logger.log(`Widget connection attempt – widgetKey=${widgetKey ?? '(none)'}, origin=${client.handshake.headers.origin ?? '(none)'}`);
            if (!widgetKey || !sessionToken) {
                this.logger.warn('Rejected: missing widgetKey or sessionToken');
                client.emit('error', { message: 'widgetKey and sessionToken required' });
                client.disconnect(true);
                return;
            }
            const origin = client.handshake.headers.origin;
            const allowed = await this.originValidator.isOriginAllowed(origin, widgetKey);
            if (!allowed) {
                this.logger.warn(`Rejected: origin "${origin}" not allowed for widgetKey="${widgetKey}"`);
                client.emit('error', { message: 'Origin not allowed' });
                client.disconnect(true);
                return;
            }
            const space = await this.prisma.chatSpace.findUnique({
                where: { widgetKey },
            });
            if (!space) {
                this.logger.warn(`Rejected: invalid widgetKey="${widgetKey}"`);
                client.emit('error', { message: 'Invalid widget key' });
                client.disconnect(true);
                return;
            }
            let visitor = await this.prisma.visitor.findUnique({
                where: { sessionToken },
            });
            if (!visitor) {
                visitor = await this.prisma.visitor.create({
                    data: {
                        chatSpaceId: space.id,
                        sessionToken,
                    },
                });
            }
            else if (visitor.chatSpaceId !== space.id) {
                visitor = await this.prisma.visitor.update({
                    where: { id: visitor.id },
                    data: { chatSpaceId: space.id },
                });
            }
            client.visitorId = visitor.id;
            client.chatSpaceId = space.id;
            const activeThread = await this.prisma.thread.findFirst({
                where: {
                    visitorId: visitor.id,
                    status: { in: [client_1.ThreadStatus.unassigned, client_1.ThreadStatus.active] },
                },
                orderBy: { lastActivityAt: 'desc' },
            });
            if (activeThread) {
                client.threadId = activeThread.id;
                client.join(`thread:${activeThread.id}`);
            }
            client.join(`visitor:${visitor.id}`);
            client.join(`chatspace:${space.id}`);
            this.logger.log(`Widget connected – visitor=${visitor.id}, chatSpace=${space.id}, thread=${activeThread?.id ?? '(new)'}`);
            client.emit('connected', {
                visitorId: visitor.id,
                threadId: activeThread?.id ?? null,
                chatSpaceId: space.id,
            });
        }
        catch (err) {
            this.logger.error('Widget connection error', err);
            client.emit('error', { message: 'Connection failed' });
            client.disconnect(true);
        }
    }
    handleDisconnect(_client) {
    }
    async handleVisitorMessage(client, payload) {
        if (!client.visitorId || !client.chatSpaceId) {
            client.emit('error', { message: 'Not authenticated' });
            return;
        }
        const content = String(payload?.content ?? '').trim();
        if (!content) {
            client.emit('error', { message: 'Content required' });
            return;
        }
        try {
            let threadId = client.threadId;
            if (!threadId) {
                const thread = await this.prisma.thread.create({
                    data: {
                        chatSpaceId: client.chatSpaceId,
                        visitorId: client.visitorId,
                        status: client_1.ThreadStatus.unassigned,
                    },
                });
                threadId = thread.id;
                client.threadId = threadId;
                client.join(`thread:${threadId}`);
                this.logger.log(`New thread created – thread=${threadId}, visitor=${client.visitorId}, chatSpace=${client.chatSpaceId}`);
                const threadPayload = { threadId: thread.id, visitorId: client.visitorId };
                this.server.to(`chatspace:${client.chatSpaceId}`).emit('thread:new', threadPayload);
                this.namespaces.get('agent')?.to(`chatspace:${client.chatSpaceId}`).emit('thread:new', threadPayload);
            }
            this.logger.log(`💬 Visitor message – thread=${threadId}, visitor=${client.visitorId}: "${content}"`);
            const message = await this.prisma.message.create({
                data: {
                    threadId,
                    senderType: client_1.MessageSenderType.visitor,
                    senderId: client.visitorId,
                    content,
                },
            });
            await this.prisma.thread.update({
                where: { id: threadId },
                data: { lastActivityAt: new Date() },
            });
            const msgPayload = {
                id: message.id,
                content: message.content,
                createdAt: message.createdAt,
                threadId,
            };
            client.emit('message:confirmed', {
                id: message.id,
                content: message.content,
                createdAt: message.createdAt,
            });
            this.server.to(`thread:${threadId}`).emit('visitor:message', msgPayload);
            this.namespaces.get('agent')?.to(`chatspace:${client.chatSpaceId}`).emit('visitor:message', msgPayload);
        }
        catch (err) {
            this.logger.warn('Visitor message error', err);
            client.emit('error', { message: 'Failed to send message' });
        }
    }
    async sendAgentMessage(threadId, payload) {
        this.server.to(`thread:${threadId}`).emit('agent:message', payload);
    }
    notifyThreadAssigned(threadId) {
        this.server.to(`thread:${threadId}`).emit('thread:assigned', { threadId });
    }
    sendAgentsStatus(chatSpaceId, hasOnline) {
        this.server.to(`chatspace:${chatSpaceId}`).emit('agents:status', { hasOnline });
    }
};
exports.WidgetGateway = WidgetGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], WidgetGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('visitor:send_message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WidgetGateway.prototype, "handleVisitorMessage", null);
exports.WidgetGateway = WidgetGateway = WidgetGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: 'widget',
        cors: { origin: true },
    }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        origin_validator_service_1.OriginValidatorService,
        socket_namespaces_service_1.SocketNamespacesService])
], WidgetGateway);
//# sourceMappingURL=widget.gateway.js.map