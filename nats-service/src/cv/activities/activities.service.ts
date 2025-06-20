import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CreateActivityDto } from 'src/activities/dto/create-activity.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class CVActivitiesService {
  constructor(private readonly natsService: NatsService) {}
  async add(id: string, activity: CreateActivityDto, sub: number) {
    
    const result = await this.natsService.send('activity.findOne', {
      id: activity.id,
      sub,
    });

    console.log("🚀 ~ CVActivitiesService ~ add ~ s:", result)

    return await this.natsService.send('cv.activities.add', {
      id,
      activity,
      sub,
    });
  }
  async remove(id: number, activityId: number, sub: number) {
    return await this.natsService.send('cv.activities.remove', {
      id,
      activityId,
      sub,
    });
  }
}
