import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Public } from 'src/shared/decorator/public.decorator';

@Controller('oauth')
@Public()
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() {
    // La redirection vers Google est gérée par Passport
  }

}
