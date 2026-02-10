import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleInit, OnModuleDestroy {
    private client;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getClient(): Redis;
    duplicate(): Redis;
    setAgentOnline(agentId: string, ttlSeconds: number): Promise<void>;
    setAgentOffline(agentId: string): Promise<void>;
    isAgentOnline(agentId: string): Promise<boolean>;
}
