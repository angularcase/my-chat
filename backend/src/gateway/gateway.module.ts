import { Module } from '@nestjs/common';
import { ChatSpaceModule } from '../modules/chat-space/chat-space.module';
import { WidgetGateway } from './widget.gateway';
import { AgentGateway } from './agent.gateway';
import { SocketNamespacesService } from './socket-namespaces.service';

@Module({
  imports: [ChatSpaceModule],
  providers: [SocketNamespacesService, WidgetGateway, AgentGateway],
})
export class GatewayModule {}
