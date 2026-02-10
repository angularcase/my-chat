import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis | null = null;

  async onModuleInit() {
    const url = process.env.REDIS_URL ?? 'redis://localhost:6380';
    this.client = new Redis(url);
  }

  async onModuleDestroy() {
    if (this.client) {
      this.client.disconnect();
      this.client = null;
    }
  }

  getClient(): Redis {
    if (!this.client) throw new Error('Redis not connected');
    return this.client;
  }

  /** Create a duplicate client for pub/sub (e.g. Socket.IO adapter). */
  duplicate(): Redis {
    if (!this.client) throw new Error('Redis not connected');
    return this.client.duplicate();
  }

  /** Agent presence: set key with TTL. Key expires when heartbeat stops. */
  async setAgentOnline(agentId: string, ttlSeconds: number): Promise<void> {
    const key = `agent:online:${agentId}`;
    await this.getClient().setex(key, ttlSeconds, '1');
  }

  async setAgentOffline(agentId: string): Promise<void> {
    await this.getClient().del(`agent:online:${agentId}`);
  }

  async isAgentOnline(agentId: string): Promise<boolean> {
    const key = await this.getClient().get(`agent:online:${agentId}`);
    return key === '1';
  }
}
