import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable, Logger } from '@nestjs/common';
import { OauthService } from '../oauth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  private readonly logger = new Logger(GoogleStrategy.name);

  constructor(
    private authService: OauthService
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      //TODO revoir le scope
      scope: ['email', 'profile'],
      // Options supplémentaires
      passReqToCallback: true,
      prompt: 'select_account',
      accessType: 'offline',
      state: true, // Activer la protection CSRF
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    console.log("🚀 ~ GoogleStrategy ~ classGoogleStrategyextendsPassportStrategy ~ accessToken:", accessToken)
    console.log("🚀 ~ GoogleStrategy ~ classGoogleStrategyextendsPassportStrategy ~ refreshToken:", refreshToken)
    console.log("enter");

    try {
      this.logger.log(`Google Strategy - Profile reçu: ${JSON.stringify(profile, null, 2)}`);
      const { id, name, emails, photos } = profile;
      
      const user = await this.authService.validateOrCreateGoogleUser({
        googleId: id,
        email: emails[0].value,
        firstname: name.givenName,
        lastname: name.familyName,
        profilePicture: photos[0].value,
        accessToken,
        refreshToken,
      });
      done(null, user);
    } catch (error) {
      this.logger.error(`Erreur lors de la validation Google: ${error.message}`, error.stack);
      done(error, null);
    }
  }
}
