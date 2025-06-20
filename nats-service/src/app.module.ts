import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NatsModule } from './nats/nats.module';
import { OauthModule } from './oauth/oauth.module';
import { ConfigModule } from '@nestjs/config';
import { CVActivitiesModule } from './activities/activities.module';
import { EducationModule } from './education/education.module';
import { EventModule } from './event/event.module';
import { ExperienceModule } from './experience/experience.module';
import { LangModule } from './lang/lang.module';
import { MadSkillsModule } from './mad-skills/mad-skills.module';
import { ProfileModule } from './profile/profile.module';
import { SkillsModule } from './skills/skills.module';
import { MemberModule } from './member/member.module';
import { LoginGuard } from './shared/guard/login.guard';
import { AuthGuard } from './shared/guard/auth.guard';
import { VerifyUserGuard } from './shared/guard/member.guard';
import { CvModule } from './cv/cv.module';

@Module({
  imports: [
    NatsModule,
    AuthModule,
    OauthModule,
    ConfigModule.forRoot({
      isGlobal: true, // rend le module accessible partout
    }),
    CVActivitiesModule,
    EducationModule,
    EventModule,
    ExperienceModule,
    LangModule,
    MadSkillsModule,
    ProfileModule,
    SkillsModule,
    MemberModule,
    CvModule,
  ],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: LoginGuard,
    },
    AuthGuard,
    VerifyUserGuard,
  ],
})
export class AppModule {}
