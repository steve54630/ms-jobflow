import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
import { Public } from 'src/shared/decorator/public.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@Public()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  async login(
    @Body() authDto: AuthDto,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response
  ): Promise<{ accessToken: string }> {
    return this.authService.login(authDto, request, response);
  }

  @Get('refresh')
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response
  ): Promise<{ accessToken: string }> {
    return await this.authService.refresh(request, response);
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() request: Request, @Res() response: Response) {
    return this.authService.googleLogin(request, response);
  }

}
