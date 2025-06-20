import { Module } from '@nestjs/common';
import { MadSkillsService } from './mad_skills.service';
import { MadSkillsController } from './mad_skills.controller';
import { CvModule } from 'src/cv/cv.module';

@Module({
  imports : [CvModule],
  controllers: [MadSkillsController],
  providers: [MadSkillsService],
})
export class MadSkillsModule {}
