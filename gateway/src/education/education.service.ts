import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class EducationService {
  constructor(private readonly natsService: NatsService) {}

  async remove(id: number, sub: number) {
    return await this.natsService.send('education.remove', { id, sub });
  }
  async update(id: number, updateEducationDto: UpdateEducationDto, sub: number) {
    return await this.natsService.send('education.update', {
      id,
      updateEducationDto,
      sub,
    });
  }
  async findAll(sub: number) {
    return await this.natsService.send('education.findAll', { sub });
  }
  async create(createEducationDto: CreateEducationDto, sub: number) {
    return await this.natsService.send('education.create', {
      createEducationDto,
      sub,
    });
  }
}
