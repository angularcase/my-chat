import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  CurrentUser,
  type CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { MessageService } from './message.service';

@Controller('threads/:threadId/messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll(
    @CurrentUser() user: CurrentUserPayload,
    @Param('threadId') threadId: string,
    @Query('cursor') cursor?: string,
    @Query('take') take?: string,
  ) {
    const takeNum = take != null ? Math.min(100, Math.max(1, parseInt(take, 10))) : 50;
    return this.messageService.findByThread(user, threadId, cursor, takeNum);
  }
}
