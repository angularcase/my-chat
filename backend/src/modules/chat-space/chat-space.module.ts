import { Module } from '@nestjs/common';
import { OriginValidatorService } from '../../common/origin-validator.service';
import { ChatSpaceController } from './chat-space.controller';
import { ChatSpaceService } from './chat-space.service';

@Module({
  controllers: [ChatSpaceController],
  providers: [ChatSpaceService, OriginValidatorService],
  exports: [ChatSpaceService, OriginValidatorService],
})
export class ChatSpaceModule {}
