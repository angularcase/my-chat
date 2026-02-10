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
exports.ThreadService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../prisma/prisma.service");
const chat_space_service_1 = require("../chat-space/chat-space.service");
let ThreadService = class ThreadService {
    prisma;
    chatSpaceService;
    constructor(prisma, chatSpaceService) {
        this.prisma = prisma;
        this.chatSpaceService = chatSpaceService;
    }
    async findAllByChatSpace(user, chatSpaceId, status) {
        await this.chatSpaceService.assertBelongsToOrganization(chatSpaceId, user.organizationId);
        return this.prisma.thread.findMany({
            where: {
                chatSpaceId,
                ...(status != null && { status }),
            },
            include: {
                visitor: { select: { id: true, displayName: true, email: true } },
                agent: { select: { id: true, displayName: true, email: true } },
                _count: { select: { messages: true } },
            },
            orderBy: { lastActivityAt: 'desc' },
        });
    }
    async claim(user, threadId) {
        const thread = await this.prisma.thread.findUnique({
            where: { id: threadId },
        });
        if (!thread) {
            throw new common_1.NotFoundException('Thread not found');
        }
        await this.chatSpaceService.assertBelongsToOrganization(thread.chatSpaceId, user.organizationId);
        if (thread.status !== client_1.ThreadStatus.unassigned) {
            throw new common_1.BadRequestException('Thread is already assigned or closed');
        }
        return this.prisma.thread.update({
            where: { id: threadId },
            data: {
                assignedAgentId: user.id,
                status: client_1.ThreadStatus.active,
            },
            include: {
                visitor: { select: { id: true, displayName: true, email: true } },
            },
        });
    }
    async close(user, threadId) {
        const thread = await this.prisma.thread.findUnique({
            where: { id: threadId },
        });
        if (!thread) {
            throw new common_1.NotFoundException('Thread not found');
        }
        await this.chatSpaceService.assertBelongsToOrganization(thread.chatSpaceId, user.organizationId);
        return this.prisma.thread.update({
            where: { id: threadId },
            data: { status: client_1.ThreadStatus.closed },
        });
    }
    async findOne(user, threadId) {
        const thread = await this.prisma.thread.findUnique({
            where: { id: threadId },
            include: {
                visitor: { select: { id: true, displayName: true, email: true } },
                agent: { select: { id: true, displayName: true, email: true } },
            },
        });
        if (!thread) {
            throw new common_1.NotFoundException('Thread not found');
        }
        await this.chatSpaceService.assertBelongsToOrganization(thread.chatSpaceId, user.organizationId);
        return thread;
    }
};
exports.ThreadService = ThreadService;
exports.ThreadService = ThreadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        chat_space_service_1.ChatSpaceService])
], ThreadService);
//# sourceMappingURL=thread.service.js.map