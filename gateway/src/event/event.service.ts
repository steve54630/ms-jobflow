import { Injectable } from '@nestjs/common';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class EventService {
  constructor(private readonly natsService: NatsService) {}

  async create(createEventDto: CreateEventDto, sub: number) {
    return await this.natsService.send('events.create', { createEventDto, sub });
  }
  async findAll(sub: number) {
    return await this.natsService.send('events.findAllFuture', { sub });
  }
  async findAllFromDay(sub: number, day: string) {
    return await this.natsService.send('events.findAllFromDay', { sub, day });
  }
  async findOne(id: number) {
    return await this.natsService.send('events.findOne', { id });
  }
  async update(id: number, updateEventDto: UpdateEventDto, sub: number) {
    return await this.natsService.send('events.update', {
      id,
      updateEventDto,
      sub,
    });
  }
  async remove(id: number, sub: number) {
    return await this.natsService.send('event.remove', { id, sub });
  }
}
