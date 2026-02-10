"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadModule = void 0;
const common_1 = require("@nestjs/common");
const chat_space_module_1 = require("../chat-space/chat-space.module");
const thread_controller_1 = require("./thread.controller");
const thread_service_1 = require("./thread.service");
let ThreadModule = class ThreadModule {
};
exports.ThreadModule = ThreadModule;
exports.ThreadModule = ThreadModule = __decorate([
    (0, common_1.Module)({
        imports: [chat_space_module_1.ChatSpaceModule],
        controllers: [thread_controller_1.ThreadController, thread_controller_1.ThreadByIdController],
        providers: [thread_service_1.ThreadService],
        exports: [thread_service_1.ThreadService],
    })
], ThreadModule);
//# sourceMappingURL=thread.module.js.map