import { Body, Controller, Delete, Post } from '@nestjs/common';
import {
  CurrentUser,
  type CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { DeviceService } from './device.service';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { UnregisterDeviceDto } from './dto/unregister-device.dto';

@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('register')
  register(
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: RegisterDeviceDto,
  ) {
    return this.deviceService.register(user, dto);
  }

  @Delete()
  unregister(
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: UnregisterDeviceDto,
  ) {
    return this.deviceService.unregister(user, dto.token);
  }
}
