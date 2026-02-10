import { Module } from '@nestjs/common';
import { ChatSpaceModule } from '../chat-space/chat-space.module';
import { ThreadByIdController, ThreadController } from './thread.controller';
import { ThreadService } from './thread.service';

@Module({
  imports: [ChatSpaceModule],
  controllers: [ThreadController, ThreadByIdController],
  providers: [ThreadService],
  exports: [ThreadService],
})
export class ThreadModule {}
