import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { CVActivitiesModule } from './activities/activities.module';
import { EductionsModule } from './eductions/eductions.module';
import { CVExperiencesModule } from './experiences/experiences.module';
import { ProfileModule } from './profile/profile.module';
import { CVSkillsModule } from './skill/skill.module';
import { CVLanguesModule } from './langues/langues.module';
import { MadSkillsModule } from './mad_skills/mad_skills.module';

@Module({
  controllers: [CvController],
  providers: [CvService],
  imports: [CVActivitiesModule, EductionsModule, CVExperiencesModule, ProfileModule, CVSkillsModule, CVLanguesModule, MadSkillsModule],
})
export class CvModule {}
