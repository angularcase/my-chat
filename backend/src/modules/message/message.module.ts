import { Module } from '@nestjs/common';
import { ChatSpaceModule } from '../chat-space/chat-space.module';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [ChatSpaceModule],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
