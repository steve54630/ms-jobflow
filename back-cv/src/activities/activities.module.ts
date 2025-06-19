import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { CvModule } from 'src/cv/cv.module';

@Module({
  imports: [CvModule],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
