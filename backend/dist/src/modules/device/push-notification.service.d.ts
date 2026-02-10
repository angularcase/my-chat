import { OnModuleInit } from '@nestjs/common';
import { DeviceService } from './device.service';
export type PushPayload = {
    threadId: string;
    chatSpaceId: string;
    title?: string;
    body?: string;
};
export declare class PushNotificationService implements OnModuleInit {
    private readonly deviceService;
    private readonly logger;
    private messaging;
    constructor(deviceService: DeviceService);
    onModuleInit(): void;
    notifyAgentsNewMessage(organizationId: string, payload: PushPayload): Promise<void>;
}
