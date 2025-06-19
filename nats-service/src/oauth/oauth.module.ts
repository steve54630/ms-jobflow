import { Module } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { OauthController } from './oauth.controller';
import { NatsModule } from 'src/nats/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [OauthController],
  providers: [OauthService],
})
export class OauthModule {}
