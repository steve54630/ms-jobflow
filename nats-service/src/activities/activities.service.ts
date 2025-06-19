import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class ActivitiesService {

  constructor(private readonly natsService: NatsService) {}

  async remove(id: number, sub: number) {
    return await this.natsService.send('activity.remove', { id, sub });
  }
  async update(id: number, updateActivityDto: UpdateActivityDto, sub: number) {
    return await this.natsService.send('activity.update', { id, updateActivityDto, sub });
  }
  
  async findAll(sub: number) {
    return await this.natsService.send('activity.findAll', { sub });
  }
  async create(createActivityDto: CreateActivityDto, sub: number) {
    return await this.natsService.send('activity.create', { createActivityDto, sub });
  }
}
