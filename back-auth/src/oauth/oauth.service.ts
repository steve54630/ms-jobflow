import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { RpcException } from '@nestjs/microservices';

export type GoogleUser = {
  googleId: any;
  email: string;
  firstname: string;
  lastname: string;
  profilePicture: string;
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class OauthService {
  constructor(private readonly prisma: PrismaService, private readonly authService: AuthService) {}

  async validateOrCreateGoogleUser(user: GoogleUser) {

    console.log("🚀 ~ OauthService ~ validateOrCreateGoogleUser ~ user:", user)

    const socialLogin = await this.prisma.socialLogins.findUnique({
      where: {
        provider_provider_id: {
          provider: 'google',
          provider_id: user.googleId,
        },
      },
      include: {
        member: true,
      },
    });

    if (socialLogin) {
      return socialLogin.member;
    }

    const existingUser = await this.prisma.member.findFirst({
      where: {
        email: user.email,
      },
    });

    if (existingUser) {
      if (existingUser.password) {
        throw new RpcException({
          code: HttpStatus.UNAUTHORIZED,
          message: 'Mot de passe incorrect',
        })
      }

      await this.prisma.socialLogins.create({
        data: {
          provider: 'google',
          provider_id: user.googleId,
          member_id: existingUser.id,
          access_token: user.accessToken,
          refresh_token: user.refreshToken,
        },
      });

      return existingUser;
    } else {
      const newUser = await this.prisma.member.create({
        data: {
          username: user.email.split('@')[0],
          email: user.email,
          socialLogins: {
            create: {
              provider: 'google',
              provider_id: user.googleId,
              access_token: user.accessToken,
              refresh_token: user.refreshToken ? user.refreshToken : null,
            },
          },
        },
      });

      return newUser;
    }
  }

  async googleLogin(username : string) {
    try {
      const token = await this.authService.login({
        username,
        password: '',
      });

      const redirectUrl = `${process.env.BASE_URL}/oauth`;

      return {redirectUrl, token};
    } catch (error) {
      console.log(error);
      if (error.status === 409) {
        return process.env.BASE_URL!;
      }
    }

    return ""
  }
}
