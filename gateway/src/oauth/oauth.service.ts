import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { NatsService } from '../nats/nats.service';

type GoogleUser = {
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
  
  constructor(private readonly natsService: NatsService) {}
  
  async validateOrCreateGoogleUser(user: GoogleUser) {
    const result = await this.natsService.send('google.create', user);
    console.log("🚀 ~ OauthService ~ validateOrCreateGoogleUser ~ result:", result)
    return result;
  }
  
}
