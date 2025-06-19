import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { CvModule } from 'src/cv/cv.module';

@Module({
  imports: [CvModule],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
