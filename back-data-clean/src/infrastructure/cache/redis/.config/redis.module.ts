import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';

@Global() // optionnel, si tu veux que ce module soit disponible globalement
@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
