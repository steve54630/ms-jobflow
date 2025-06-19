import { Module } from '@nestjs/common';
import { MadSkillsService } from './mad-skills.service';
import { MadSkillsController } from './mad-skills.controller';

@Module({
  controllers: [MadSkillsController],
  providers: [MadSkillsService],
})
export class MadSkillsModule {}
