import { Module } from '@nestjs/common';
import { MemberController } from './member/member.controller';
import { AuthController } from './auth/auth.controller';
import { MemberService } from './member/member.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { OauthModule } from './oauth/oauth.module';
import { ConfigModule } from '@nestjs/config';
import { OauthService } from './oauth/oauth.service';
import { OauthController } from './oauth/oauth.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // rend le module accessible partout
    }),
    OauthModule,
    PrismaModule,
    AuthModule
  ],
  exports: [PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
