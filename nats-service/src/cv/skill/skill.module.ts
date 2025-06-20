import { Module } from '@nestjs/common';
import { CVSkillsService } from './skill.service';
import { CvSkillsController } from './skill.controller';

@Module({
  controllers: [CvSkillsController],
  providers: [CVSkillsService],
})
export class CVSkillsModule {}
