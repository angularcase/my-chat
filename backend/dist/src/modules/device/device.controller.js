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
exports.DeviceController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const device_service_1 = require("./device.service");
const register_device_dto_1 = require("./dto/register-device.dto");
const unregister_device_dto_1 = require("./dto/unregister-device.dto");
let DeviceController = class DeviceController {
    deviceService;
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    register(user, dto) {
        return this.deviceService.register(user, dto);
    }
    unregister(user, dto) {
        return this.deviceService.unregister(user, dto.token);
    }
};
exports.DeviceController = DeviceController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, register_device_dto_1.RegisterDeviceDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "register", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, unregister_device_dto_1.UnregisterDeviceDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "unregister", null);
exports.DeviceController = DeviceController = __decorate([
    (0, common_1.Controller)('devices'),
    __metadata("design:paramtypes", [device_service_1.DeviceService])
], DeviceController);
//# sourceMappingURL=device.controller.js.map