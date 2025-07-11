import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { NatsModule } from 'src/nats/nats.module';
import { GoogleStrategy } from 'src/oauth/strategies/google.strategies';
import { PassportModule } from '@nestjs/passport';
import { OauthService } from 'src/oauth/oauth.service';

@Module({
  imports: [NatsModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, OauthService],
})
export class AuthModule {}
