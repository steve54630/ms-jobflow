import { Module } from '@nestjs/common';
import { CVActivitiesService } from './activities.service';
import { CVActivitiesController } from './activities.controller';

@Module({
  controllers: [CVActivitiesController],
  providers: [CVActivitiesService],
})
export class CVActivitiesModule {}
