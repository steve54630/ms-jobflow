import { Module } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { OauthController } from './oauth.controller';
import { AuthService } from 'src/auth/auth.service';
import { MemberService } from 'src/member/member.service';

@Module({
  controllers: [OauthController],
  providers: [OauthService, AuthService, MemberService],
})
export class OauthModule {}
