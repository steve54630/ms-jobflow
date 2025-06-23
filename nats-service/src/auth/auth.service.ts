import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { NatsService } from 'src/nats/nats.service';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private readonly natsService: NatsService) {}
  async refresh(request: Request, response: Response) {
    const msg = await this.natsService.send('auth.refresh', {
      refreshToken: request.cookies.refreshToken,
      ip: request.ip,
    });

    response.cookie('refreshToken', msg.refreshToken, {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      expires: await this.getRefreshDate(),
    });

    return { accessToken: msg.accessToken };
  }

  async googleLogin(request: Request, response: Response) {
    const result = await this.natsService.send('google.redirect', {
      username: request.user!['username'],
    });

    response.cookie('refreshToken', result.token.refreshToken, {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      expires: await this.getRefreshDate(),
    });

    response.redirect(result.redirectUrl);
  }

  async login(authDto: AuthDto, request: Request, response: Response) {
    const msg = await this.natsService.send('auth.login', {
      ...authDto,
      refreshToken: request.cookies.refreshToken,
      ip: request.ip,
    });

    response.cookie('refreshToken', msg.refreshToken, {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      expires: await this.getRefreshDate(),
    });

    return { accessToken: msg.accessToken };
  }

  private async getRefreshDate(): Promise<Date> {
    const expire = 60 * 60 * 1000;
    const date = new Date(Date.now() + expire);
    return date;
  }
}
