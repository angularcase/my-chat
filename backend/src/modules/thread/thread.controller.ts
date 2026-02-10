import {
  Controller,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { ThreadStatus } from '@prisma/client';
import {
  CurrentUser,
  type CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { ThreadService } from './thread.service';

@Controller('chat-spaces/:chatSpaceId/threads')
export class ThreadController {
  constructor(private readonly threadService: ThreadService) {}

  @Get()
  findAll(
    @CurrentUser() user: CurrentUserPayload,
    @Param('chatSpaceId') chatSpaceId: string,
    @Query('status') status?: ThreadStatus,
  ) {
    return this.threadService.findAllByChatSpace(user, chatSpaceId, status);
  }
}

@Controller('threads')
export class ThreadByIdController {
  constructor(private readonly threadService: ThreadService) {}

  @Get(':id')
  findOne(@CurrentUser() user: CurrentUserPayload, @Param('id') id: string) {
    return this.threadService.findOne(user, id);
  }

  @Patch(':id/claim')
  claim(@CurrentUser() user: CurrentUserPayload, @Param('id') id: string) {
    return this.threadService.claim(user, id);
  }

  @Patch(':id/close')
  close(@CurrentUser() user: CurrentUserPayload, @Param('id') id: string) {
    return this.threadService.close(user, id);
  }
}
