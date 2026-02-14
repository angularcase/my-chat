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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../prisma/prisma.service");
const socket_namespaces_service_1 = require("../../gateway/socket-namespaces.service");
const chat_space_service_1 = require("../chat-space/chat-space.service");
let MessageService = class MessageService {
    prisma;
    chatSpaceService;
    namespaces;
    constructor(prisma, chatSpaceService, namespaces) {
        this.prisma = prisma;
        this.chatSpaceService = chatSpaceService;
        this.namespaces = namespaces;
    }
    async findByThread(user, threadId, cursor, take = 50) {
        const thread = await this.prisma.thread.findUnique({
            where: { id: threadId },
        });
        if (!thread) {
            return { messages: [], nextCursor: null };
        }
        await this.chatSpaceService.assertBelongsToOrganization(thread.chatSpaceId, user.organizationId);
        const messages = await this.prisma.message.findMany({
            where: { threadId },
            take: take + 1,
            ...(cursor && {
                cursor: { id: cursor },
                skip: 1,
            }),
            orderBy: { createdAt: 'asc' },
        });
        const hasMore = messages.length > take;
        const nextCursor = hasMore ? messages[take - 1]?.id ?? null : null;
        const list = hasMore ? messages.slice(0, take) : messages;
        return {
            messages: list,
            nextCursor,
        };
    }
    async sendMessage(user, threadId, content) {
        if (!content) {
            return { id: null, error: 'Content required' };
        }
        const thread = await this.prisma.thread.findUnique({
            where: { id: threadId },
        });
        if (!thread) {
            return { id: null, error: 'Thread not found' };
        }
        await this.chatSpaceService.assertBelongsToOrganization(thread.chatSpaceId, user.organizationId);
        if (thread.assignedAgentId !== user.id || thread.status !== client_1.ThreadStatus.active) {
            return { id: null, error: 'Thread not found or not assigned to you' };
        }
        const message = await this.prisma.message.create({
            data: {
                threadId,
                senderType: client_1.MessageSenderType.agent,
                senderId: user.id,
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
        return { id: message.id };
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        chat_space_service_1.ChatSpaceService,
        socket_namespaces_service_1.SocketNamespacesService])
], MessageService);
//# sourceMappingURL=message.service.js.map