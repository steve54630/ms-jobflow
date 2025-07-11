import { Module } from '@nestjs/common';
import { CVMadSkillsService } from './mad_skills.service';
import { CvMadSkillsController } from './mad_skills.controller';

@Module({
  controllers: [CvMadSkillsController],
  providers: [CVMadSkillsService],
})
export class MadSkillsModule {}
