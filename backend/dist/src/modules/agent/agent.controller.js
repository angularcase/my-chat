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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const redis_service_1 = require("../../redis/redis.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const update_status_dto_1 = require("./dto/update-status.dto");
const PRESENCE_TTL = 60;
let AgentController = class AgentController {
    prisma;
    redis;
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async updateMyStatus(user, dto) {
        await this.prisma.agent.update({
            where: { id: user.id },
            data: {
                isOnline: dto.isOnline,
                lastSeenAt: new Date(),
            },
        });
        if (dto.isOnline) {
            await this.redis.setAgentOnline(user.id, PRESENCE_TTL);
        }
        else {
            await this.redis.setAgentOffline(user.id);
        }
        return { isOnline: dto.isOnline };
    }
};
exports.AgentController = AgentController;
__decorate([
    (0, common_1.Patch)('me/status'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "updateMyStatus", null);
exports.AgentController = AgentController = __decorate([
    (0, common_1.Controller)('agents'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], AgentController);
//# sourceMappingURL=agent.controller.js.map