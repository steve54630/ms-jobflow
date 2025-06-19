import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
import { Public } from 'src/shared/decorator/public.decorator';

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

}
