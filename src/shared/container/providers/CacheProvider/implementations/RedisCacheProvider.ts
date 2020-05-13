import Redis from 'ioredis';

import cacheConfig from '@config/cache';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

export default class RedisCacheProvider implements ICacheProvider {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: string): Promise<void> {
    this.client.set(key, JSON.stringify(value));
  }

  public async recover(key: string): Promise<string | null> {
    const data = await this.client.get(key);

    return data;
  }

  public async invalidate(key: string): Promise<void> {
    console.log(key);
  }
}
