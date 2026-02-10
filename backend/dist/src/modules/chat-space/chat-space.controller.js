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
exports.ChatSpaceController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const chat_space_service_1 = require("./chat-space.service");
const create_chat_space_dto_1 = require("./dto/create-chat-space.dto");
const update_chat_space_dto_1 = require("./dto/update-chat-space.dto");
let ChatSpaceController = class ChatSpaceController {
    chatSpaceService;
    constructor(chatSpaceService) {
        this.chatSpaceService = chatSpaceService;
    }
    create(user, dto) {
        return this.chatSpaceService.create(user, dto);
    }
    findAll(user) {
        return this.chatSpaceService.findAll(user);
    }
    findOne(user, id) {
        return this.chatSpaceService.findOne(user, id);
    }
    update(user, id, dto) {
        return this.chatSpaceService.update(user, id, dto);
    }
    remove(user, id) {
        return this.chatSpaceService.remove(user, id);
    }
};
exports.ChatSpaceController = ChatSpaceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_chat_space_dto_1.CreateChatSpaceDto]),
    __metadata("design:returntype", void 0)
], ChatSpaceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatSpaceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChatSpaceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_chat_space_dto_1.UpdateChatSpaceDto]),
    __metadata("design:returntype", void 0)
], ChatSpaceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChatSpaceController.prototype, "remove", null);
exports.ChatSpaceController = ChatSpaceController = __decorate([
    (0, common_1.Controller)('chat-spaces'),
    __metadata("design:paramtypes", [chat_space_service_1.ChatSpaceService])
], ChatSpaceController);
//# sourceMappingURL=chat-space.controller.js.map