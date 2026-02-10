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
exports.DeviceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let DeviceService = class DeviceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(user, dto) {
        await this.prisma.deviceToken.upsert({
            where: { token: dto.token },
            create: {
                agentId: user.id,
                token: dto.token,
                platform: dto.platform,
            },
            update: {
                agentId: user.id,
                platform: dto.platform,
            },
        });
        return { registered: true };
    }
    async unregister(user, token) {
        await this.prisma.deviceToken.deleteMany({
            where: {
                token,
                agentId: user.id,
            },
        });
        return { unregistered: true };
    }
    async getTokensByAgentIds(agentIds) {
        if (agentIds.length === 0)
            return [];
        const devices = await this.prisma.deviceToken.findMany({
            where: { agentId: { in: agentIds } },
            select: { token: true, platform: true },
        });
        return devices;
    }
    async getTokensForOrganization(organizationId) {
        const agents = await this.prisma.agent.findMany({
            where: { organizationId },
            select: { id: true },
        });
        const agentIds = agents.map((a) => a.id);
        return this.getTokensByAgentIds(agentIds);
    }
};
exports.DeviceService = DeviceService;
exports.DeviceService = DeviceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DeviceService);
//# sourceMappingURL=device.service.js.map