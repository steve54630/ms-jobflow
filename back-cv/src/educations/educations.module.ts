import { Module } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { EducationsController } from './educations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CvModule } from 'src/cv/cv.module';
import { CvService } from 'src/cv/cv.service';

@Module({
  imports: [MongooseModule, CvModule],
  controllers: [EducationsController],
  providers: [EducationsService, CvService],
})
export class EducationsModule {}
