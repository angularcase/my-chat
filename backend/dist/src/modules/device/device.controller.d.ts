import { type CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { DeviceService } from './device.service';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { UnregisterDeviceDto } from './dto/unregister-device.dto';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    register(user: CurrentUserPayload, dto: RegisterDeviceDto): Promise<{
        registered: boolean;
    }>;
    unregister(user: CurrentUserPayload, dto: UnregisterDeviceDto): Promise<{
        unregistered: boolean;
    }>;
}
