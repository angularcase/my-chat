import { Module } from '@nestjs/common';
import { ChatSpaceModule } from '../modules/chat-space/chat-space.module';
import { DeviceModule } from '../modules/device/device.module';
import { WidgetGateway } from './widget.gateway';
import { AgentGateway } from './agent.gateway';
import { SocketNamespacesService } from './socket-namespaces.service';

@Module({
  imports: [ChatSpaceModule, DeviceModule],
  providers: [SocketNamespacesService, WidgetGateway, AgentGateway],
  exports: [SocketNamespacesService],
})
export class GatewayModule {}
