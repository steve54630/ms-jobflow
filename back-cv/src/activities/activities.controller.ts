import { Controller } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import Activity from './entity/activity.entity';
import { CvService } from 'src/cv/cv.service';

@Controller()
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService, private readonly cvService: CvService) {}

  @MessagePattern('cv.activities.add')
  async add(
    @Payload()
    { id, sub, activity }: { id: string; sub: number; activity: Activity },
  ) {

    await this.cvService.verifyCv(id, sub);

    return this.activitiesService.add(id, activity);
  }

  @MessagePattern('cv.activities.delete')
  async delete(@Payload() { id, sub, activityId }: { id: string; sub: number, activityId: number }) {

    await this.cvService.verifyCv(id, sub);

    return this.activitiesService.delete(id, activityId);
  }
}
