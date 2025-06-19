import { Module } from '@nestjs/common';
import { CvModule } from './cv/cv.module';
import { ProfileModule } from './profile/profile.module';
import { EducationsModule } from './educations/educations.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { LanguesModule } from './langues/langues.module';
import { ActivitiesModule } from './activities/activities.module';
import { SkillsModule } from './skills/skills.module';
import { MadSkillsModule } from './mad_skills/mad_skills.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CVSchema } from './cv/entity/cv.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/cv?authSource=admin'),
    CvModule,
    ProfileModule,
    EducationsModule,
    ExperiencesModule,
    LanguesModule,
    ActivitiesModule,
    SkillsModule,
    MadSkillsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
