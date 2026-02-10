import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './modules/auth/auth.module';
import { AgentModule } from './modules/agent/agent.module';
import { ChatSpaceModule } from './modules/chat-space/chat-space.module';
import { ThreadModule } from './modules/thread/thread.module';
import { MessageModule } from './modules/message/message.module';
import { DeviceModule } from './modules/device/device.module';
import { GatewayModule } from './gateway/gateway.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PrismaModule,
    RedisModule,
    AuthModule,
    AgentModule,
    ChatSpaceModule,
    ThreadModule,
    MessageModule,
    DeviceModule,
    GatewayModule,
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 10 },
      { name: 'medium', ttl: 10000, limit: 50 },
      { name: 'long', ttl: 60000, limit: 200 },
    ]),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
