import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { CvModule } from 'src/cv/cv.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CVSchema } from 'src/cv/entity/cv.schema';

@Module({
  imports : [CvModule],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
