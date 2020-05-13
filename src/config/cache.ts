import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',

  config: {
    redis: {
      host: '192.168.0.103',
      port: 6379,
      password: undefined,
    },
  },
} as ICacheConfig;
