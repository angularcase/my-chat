import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { PushNotificationService } from './push-notification.service';

@Module({
  controllers: [DeviceController],
  providers: [DeviceService, PushNotificationService],
  exports: [DeviceService, PushNotificationService],
})
export class DeviceModule {}
