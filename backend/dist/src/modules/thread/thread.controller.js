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
exports.ThreadByIdController = exports.ThreadController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const thread_service_1 = require("./thread.service");
let ThreadController = class ThreadController {
    threadService;
    constructor(threadService) {
        this.threadService = threadService;
    }
    findAll(user, chatSpaceId, status) {
        return this.threadService.findAllByChatSpace(user, chatSpaceId, status);
    }
};
exports.ThreadController = ThreadController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('chatSpaceId')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ThreadController.prototype, "findAll", null);
exports.ThreadController = ThreadController = __decorate([
    (0, common_1.Controller)('chat-spaces/:chatSpaceId/threads'),
    __metadata("design:paramtypes", [thread_service_1.ThreadService])
], ThreadController);
let ThreadByIdController = class ThreadByIdController {
    threadService;
    constructor(threadService) {
        this.threadService = threadService;
    }
    findOne(user, id) {
        return this.threadService.findOne(user, id);
    }
    claim(user, id) {
        return this.threadService.claim(user, id);
    }
    close(user, id) {
        return this.threadService.close(user, id);
    }
};
exports.ThreadByIdController = ThreadByIdController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ThreadByIdController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/claim'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ThreadByIdController.prototype, "claim", null);
__decorate([
    (0, common_1.Patch)(':id/close'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ThreadByIdController.prototype, "close", null);
exports.ThreadByIdController = ThreadByIdController = __decorate([
    (0, common_1.Controller)('threads'),
    __metadata("design:paramtypes", [thread_service_1.ThreadService])
], ThreadByIdController);
//# sourceMappingURL=thread.controller.js.map