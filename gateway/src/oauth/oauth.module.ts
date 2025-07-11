import { Module } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { OauthController } from './oauth.controller';
import { NatsModule } from 'src/nats/nats.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategies/google.strategies';

@Module({
  imports: [NatsModule, PassportModule.register({ session: true })],
  controllers: [OauthController],
  providers: [OauthService, GoogleStrategy],
})
export class OauthModule {}
