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
var PushNotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationService = void 0;
const common_1 = require("@nestjs/common");
const device_service_1 = require("./device.service");
let PushNotificationService = PushNotificationService_1 = class PushNotificationService {
    deviceService;
    logger = new common_1.Logger(PushNotificationService_1.name);
    messaging = null;
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    onModuleInit() {
        try {
            let credential;
            if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
                credential = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
            }
            if (!credential && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
                this.logger.warn('Push notifications disabled: set FIREBASE_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS');
                return;
            }
            const admin = require('firebase-admin');
            if (!admin.apps?.length) {
                admin.initializeApp(credential ? { credential: admin.credential.cert(credential) } : {});
            }
            this.messaging = admin.messaging();
            this.logger.log('Firebase Admin initialized for push notifications');
        }
        catch (err) {
            this.logger.warn('Failed to initialize Firebase Admin', err);
        }
    }
    async notifyAgentsNewMessage(organizationId, payload) {
        if (!this.messaging)
            return;
        try {
            const devices = await this.deviceService.getTokensForOrganization(organizationId);
            if (devices.length === 0)
                return;
            const tokens = devices.map((d) => d.token);
            const title = payload.title ?? 'New chat message';
            const body = payload.body ?? 'Someone wrote on the website';
            await this.messaging.sendEachForMulticast({
                tokens,
                notification: { title, body },
                data: {
                    threadId: payload.threadId,
                    chatSpaceId: payload.chatSpaceId,
                },
                android: { priority: 'high' },
                apns: { payload: { aps: { sound: 'default' } } },
            });
            this.logger.log(`Push sent to ${tokens.length} device(s) for thread ${payload.threadId}`);
        }
        catch (err) {
            this.logger.error('Failed to send push notifications', err);
        }
    }
};
exports.PushNotificationService = PushNotificationService;
exports.PushNotificationService = PushNotificationService = PushNotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [device_service_1.DeviceService])
], PushNotificationService);
//# sourceMappingURL=push-notification.service.js.map