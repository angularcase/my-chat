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
exports.OriginValidatorService = void 0;
const common_1 = require("@nestjs/common");
const chat_space_service_1 = require("../modules/chat-space/chat-space.service");
let OriginValidatorService = class OriginValidatorService {
    chatSpaceService;
    constructor(chatSpaceService) {
        this.chatSpaceService = chatSpaceService;
    }
    async isOriginAllowed(origin, widgetKey) {
        const space = await this.chatSpaceService.findByWidgetKey(widgetKey);
        if (!space)
            return false;
        if (space.allowedDomains.length === 0)
            return true;
        if (!origin)
            return false;
        const normalized = origin.trim().toLowerCase();
        return space.allowedDomains.some((d) => d.trim().toLowerCase() === normalized);
    }
};
exports.OriginValidatorService = OriginValidatorService;
exports.OriginValidatorService = OriginValidatorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_space_service_1.ChatSpaceService])
], OriginValidatorService);
//# sourceMappingURL=origin-validator.service.js.map