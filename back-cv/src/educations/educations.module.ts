import { Module } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { EducationsController } from './educations.controller';
import { CvModule } from 'src/cv/cv.module';

@Module({
  imports: [CvModule],
  controllers: [EducationsController],
  providers: [EducationsService],
})
export class EducationsModule {}
