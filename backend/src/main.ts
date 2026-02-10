import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { networkInterfaces } from 'os';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './redis/redis-io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6380';
  const redisIoAdapter = new RedisIoAdapter(app, redisUrl);
  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);

  const port = process.env.PORT ?? 3300;
  await app.listen(port, '0.0.0.0');
  const addrs = Object.values(networkInterfaces())
    .flat()
    .filter((i) => i?.family === 'IPv4' && !i.internal)
    .map((i) => `http://${i!.address}:${port}/api`);
  console.log(`Application is running on: http://localhost:${port}/api`);
  if (addrs.length) {
    console.log(`Reachable from network: ${addrs.join(', ')}`);
  }
}
bootstrap();
