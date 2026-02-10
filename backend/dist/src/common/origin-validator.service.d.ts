import { ChatSpaceService } from '../modules/chat-space/chat-space.service';
export declare class OriginValidatorService {
    private readonly chatSpaceService;
    constructor(chatSpaceService: ChatSpaceService);
    isOriginAllowed(origin: string | undefined, widgetKey: string): Promise<boolean>;
}
