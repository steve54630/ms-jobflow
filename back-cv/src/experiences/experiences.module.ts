import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { ExperiencesController } from './experiences.controller';
import { CvModule } from 'src/cv/cv.module';

@Module({
  imports: [CvModule],
  controllers: [ExperiencesController],
  providers: [ExperiencesService],
})
export class ExperiencesModule {}
