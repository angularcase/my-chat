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
exports.ChatSpaceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ChatSpaceService = class ChatSpaceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(user, dto) {
        const widgetKey = crypto.randomUUID();
        return this.prisma.chatSpace.create({
            data: {
                organizationId: user.organizationId,
                name: dto.name,
                widgetKey,
                allowedDomains: dto.allowedDomains ?? [],
            },
        });
    }
    async findAll(user) {
        return this.prisma.chatSpace.findMany({
            where: { organizationId: user.organizationId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(user, id) {
        const space = await this.prisma.chatSpace.findUnique({
            where: { id },
        });
        if (!space || space.organizationId !== user.organizationId) {
            throw new common_1.NotFoundException('Chat space not found');
        }
        return space;
    }
    async findByWidgetKey(widgetKey) {
        return this.prisma.chatSpace.findUnique({
            where: { widgetKey },
        });
    }
    async update(user, id, dto) {
        await this.findOne(user, id);
        return this.prisma.chatSpace.update({
            where: { id },
            data: {
                ...(dto.name != null && { name: dto.name }),
                ...(dto.allowedDomains != null && { allowedDomains: dto.allowedDomains }),
            },
        });
    }
    async remove(user, id) {
        await this.findOne(user, id);
        return this.prisma.chatSpace.delete({ where: { id } });
    }
    async assertBelongsToOrganization(chatSpaceId, organizationId) {
        const space = await this.prisma.chatSpace.findUnique({
            where: { id: chatSpaceId },
        });
        if (!space || space.organizationId !== organizationId) {
            throw new common_1.ForbiddenException('Chat space does not belong to your organization');
        }
    }
};
exports.ChatSpaceService = ChatSpaceService;
exports.ChatSpaceService = ChatSpaceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatSpaceService);
//# sourceMappingURL=chat-space.service.js.map