import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() {
    // La redirection vers Google est gérée par Passport
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() request: Request, @Res() response: Response) {
    return this.oauthService.googleLogin(request, response);
  }

}
