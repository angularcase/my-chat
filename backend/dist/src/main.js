"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const os_1 = require("os");
const app_module_1 = require("./app.module");
const redis_io_adapter_1 = require("./redis/redis-io.adapter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    app.enableCors({
        origin: true,
        credentials: true,
    });
    const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6380';
    const redisIoAdapter = new redis_io_adapter_1.RedisIoAdapter(app, redisUrl);
    await redisIoAdapter.connectToRedis();
    app.useWebSocketAdapter(redisIoAdapter);
    const port = process.env.PORT ?? 3300;
    await app.listen(port, '0.0.0.0');
    const addrs = Object.values((0, os_1.networkInterfaces)())
        .flat()
        .filter((i) => i?.family === 'IPv4' && !i.internal)
        .map((i) => `http://${i.address}:${port}/api`);
    console.log(`Application is running on: http://localhost:${port}/api`);
    if (addrs.length) {
        console.log(`Reachable from network: ${addrs.join(', ')}`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map