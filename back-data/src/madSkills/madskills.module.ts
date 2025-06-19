import { Module } from '@nestjs/common';
import { MadSkillsService } from './madskills.service';
import { MadSkillsController } from './madskills.controller';

@Module({
  controllers: [MadSkillsController],
  providers: [MadSkillsService],
})
export class MadSkillsModule {}
