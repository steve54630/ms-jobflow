import { Controller } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @MessagePattern('activity.create')
  create(
    @Payload() { id, ...createActivityDto }: CreateActivityDto & { id: number },
  ) {
    return this.activityService.create(createActivityDto, id);
  }

  @MessagePattern('activity.findAll')
  findAll(@Payload() { id }: { id: number }) {
    return this.activityService.findAll(id);
  }

  @MessagePattern('activity.findOne')
  findOne(@Payload() { id, sub }: { id: number; sub: number }) {
    return this.activityService.findOne(+id, sub);
  }

  @MessagePattern('activity.update')
  update(
    @Payload()
    {
      id,
      sub,
      ...updateActivityDto
    }: UpdateActivityDto & { id: number; sub: number },
  ) {
    return this.activityService.update(id, updateActivityDto, sub);
  }

  @MessagePattern('activity.remove')
  remove(@Payload() { id, sub }: { id: number; sub: number }) {
    return this.activityService.remove(id, sub);
  }
}
