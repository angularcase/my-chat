"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatSpaceModule = void 0;
const common_1 = require("@nestjs/common");
const origin_validator_service_1 = require("../../common/origin-validator.service");
const chat_space_controller_1 = require("./chat-space.controller");
const chat_space_service_1 = require("./chat-space.service");
let ChatSpaceModule = class ChatSpaceModule {
};
exports.ChatSpaceModule = ChatSpaceModule;
exports.ChatSpaceModule = ChatSpaceModule = __decorate([
    (0, common_1.Module)({
        controllers: [chat_space_controller_1.ChatSpaceController],
        providers: [chat_space_service_1.ChatSpaceService, origin_validator_service_1.OriginValidatorService],
        exports: [chat_space_service_1.ChatSpaceService, origin_validator_service_1.OriginValidatorService],
    })
], ChatSpaceModule);
//# sourceMappingURL=chat-space.module.js.map