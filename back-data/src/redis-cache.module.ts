import { Global, Module } from '@nestjs/common';
import Redis from 'ioredis';

const redisProvider = {
  provide: 'REDIS_CLIENT',
  useFactory: () => {
    return new Redis({ host: '127.0.0.1', port: 6379 });
  },
};

@Global()
@Module({
  providers: [redisProvider],
  exports: ['REDIS_CLIENT'],
})
export class RedisCacheModule {}