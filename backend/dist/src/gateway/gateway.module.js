"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayModule = void 0;
const common_1 = require("@nestjs/common");
const chat_space_module_1 = require("../modules/chat-space/chat-space.module");
const widget_gateway_1 = require("./widget.gateway");
const agent_gateway_1 = require("./agent.gateway");
const socket_namespaces_service_1 = require("./socket-namespaces.service");
let GatewayModule = class GatewayModule {
};
exports.GatewayModule = GatewayModule;
exports.GatewayModule = GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [chat_space_module_1.ChatSpaceModule],
        providers: [socket_namespaces_service_1.SocketNamespacesService, widget_gateway_1.WidgetGateway, agent_gateway_1.AgentGateway],
    })
], GatewayModule);
//# sourceMappingURL=gateway.module.js.map