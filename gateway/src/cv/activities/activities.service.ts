import { Injectable } from '@nestjs/common';
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

    return await this.natsService.send('cv.activities.add', {
      id,
      activity,
      sub,
    });
  }

  async remove(id: string, activityId: number, sub: number) {
    return await this.natsService.emit('cv.activities.delete', {
      id,
      activityId,
      sub,
    });
  }
}
