import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Activity } from '@prisma/client-data';
import { CreateActivityDto } from 'src/shared/dto/activity/create-activity.dto';
import { UpdateActivityDto } from 'src/shared/dto/activity/update-activity.dto';

@Controller()
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @MessagePattern('activity.create')
  create(
    @Payload()
    {
      id,
      createActivityDto,
    }: {
      createActivityDto: CreateActivityDto;
      id: number;
    },
  ): Promise<Activity> {
    return this.activityService.create(createActivityDto, id);
  }

  @MessagePattern('activity.findAll')
  findAll(@Payload() { sub }: { sub: number }): Promise<Activity[] | null> {
    return this.activityService.findAll(sub);
  }

  @MessagePattern('activity.findOne')
  findOne(
    @Payload() { id, sub }: { id: number; sub: number },
  ): Promise<Activity | null> {
    return this.activityService.findOne(id, sub);
  }

  @MessagePattern('activity.update')
  update(
    @Payload()
    {
      id,
      sub,
      updateActivityDto,
    }: {
      updateActivityDto: UpdateActivityDto;
      sub: number;
      id: number;
    },
  ) {
    return this.activityService.update(id, updateActivityDto, sub);
  }

  @MessagePattern('activity.remove')
  remove(@Payload() { id, sub }: { id: number; sub: number }) {
    return this.activityService.remove(id, sub);
  }
}
