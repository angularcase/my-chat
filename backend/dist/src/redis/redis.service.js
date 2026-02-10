"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = __importDefault(require("ioredis"));
let RedisService = class RedisService {
    client = null;
    async onModuleInit() {
        const url = process.env.REDIS_URL ?? 'redis://localhost:6380';
        this.client = new ioredis_1.default(url);
    }
    async onModuleDestroy() {
        if (this.client) {
            this.client.disconnect();
            this.client = null;
        }
    }
    getClient() {
        if (!this.client)
            throw new Error('Redis not connected');
        return this.client;
    }
    duplicate() {
        if (!this.client)
            throw new Error('Redis not connected');
        return this.client.duplicate();
    }
    async setAgentOnline(agentId, ttlSeconds) {
        const key = `agent:online:${agentId}`;
        await this.getClient().setex(key, ttlSeconds, '1');
    }
    async setAgentOffline(agentId) {
        await this.getClient().del(`agent:online:${agentId}`);
    }
    async isAgentOnline(agentId) {
        const key = await this.getClient().get(`agent:online:${agentId}`);
        return key === '1';
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)()
], RedisService);
//# sourceMappingURL=redis.service.js.map