import { Controller } from '@nestjs/common';
import { GoogleUser, OauthService } from './oauth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @MessagePattern('google.redirect')
  googleAuthRedirect(@Payload() body: { username: string }) {
    return this.oauthService.googleLogin(body.username);
  }

  @MessagePattern('google.create')
  googleAuth(@Payload() body: GoogleUser) {
    return this.oauthService.validateOrCreateGoogleUser(body);
  }
}
