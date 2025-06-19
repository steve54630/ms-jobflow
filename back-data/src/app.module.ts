import { Module } from '@nestjs/common';
import { ActivityModule } from './activity/activity.module';
import { EducationModule } from './education/education.module';
import { EventModule } from './event/event.module';
import { ExperienceModule } from './experience/experience.module';
import { LangModule } from './lang/lang.module';
import { MadSkillsModule } from './madSkills/madskills.module';
import { OfferModule } from './offer/offer.module';
import { ProfileModule } from './profile/profile.module';
import { SkillsModule } from './skills/skills.module';
import { ConfigModule } from '@nestjs/config';
import { RedisCacheModule } from './redis-cache.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ActivityModule,
    EducationModule,
    EventModule,
    ExperienceModule,
    LangModule,
    MadSkillsModule,
    OfferModule,
    ProfileModule,
    SkillsModule,
    RedisCacheModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
