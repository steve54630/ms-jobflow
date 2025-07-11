import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  async onModuleInit(): Promise<void> {
    // Crée la connexion à Redis
    this.client = new Redis({
      host: 'localhost',
      port: 6379,
      // tu peux ajouter d'autres options ici (password, etc.)
    });

    this.client.on('connect', () => {
      console.log('Connected to Redis');
    });

    this.client.on('error', (err) => {
      console.error('Redis error:', err);
    });
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.quit();
    console.log('Redis connection closed');
  }

  /**
   * Retourne le client Redis pour effectuer des opérations.
   */
  getClient(): Redis {
    return this.client;
  }
}
