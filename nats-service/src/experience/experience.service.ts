import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class ExperienceService {
  constructor(private readonly natsService: NatsService) {}

  async remove(id: number, sub: number) {
    return this.natsService.send('experience.remove', { id, sub });
  }
  async update(
    id: number,
    updateExperienceDto: UpdateExperienceDto,
    sub: number,
  ) {
    return this.natsService.send('experience.update', {
      id,
      updateExperienceDto,
      sub,
    });
  }
  async findAll(sub: number) {
    return this.natsService.send('experience.findAll', { sub });
  }
  async create(createExperienceDto: CreateExperienceDto, sub: number) {
    return this.natsService.send('experience.create', {
      createExperienceDto,
      sub,
    });
  }
}
