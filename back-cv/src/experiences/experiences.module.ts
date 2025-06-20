import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { ExperiencesController } from './experiences.controller';
import { CvModule } from 'src/cv/cv.module';
import { CvService } from 'src/cv/cv.service';

@Module({
  imports : [CvModule],
  controllers: [ExperiencesController],
  providers: [ExperiencesService, CvService],
})
export class ExperiencesModule {}
