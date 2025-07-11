import { Module } from '@nestjs/common';
import { CVActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';

@Module({
  controllers: [ActivitiesController],
  providers: [CVActivitiesService],
})
export class CVActivitiesModule {}
