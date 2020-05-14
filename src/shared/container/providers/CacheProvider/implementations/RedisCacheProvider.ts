import Redis from 'ioredis';

import cacheConfig from '@config/cache';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

export default class RedisCacheProvider implements ICacheProvider {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    this.client.set(key, JSON.stringify(value));
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data) as T;

    return parsedData;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = await this.client.keys(`${prefix}:*`);

    const pipiline = this.client.pipeline();

    keys.forEach(key => {
      pipiline.del(key);
    });

    await pipiline.exec();
  }
}
