import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.login')
  async login(
    @Payload() authDto: AuthDto & {id : number, ip : string},
  ): Promise<{ accessToken: string }> {
    return this.authService.login(authDto);
  }

  @MessagePattern('auth.refresh')
  async refresh(
    @Payload() request: {refreshToken: string; ip: string},
  ): Promise<{ accessToken: string }> {
    return this.authService.refresh(request);
  }
  
  @MessagePattern('auth.jwt')
  async jwt(@Payload() request: {token : string, ip : string}): Promise<{ accessToken: string }> {
    return this.authService.jwt(request);
  }
}
