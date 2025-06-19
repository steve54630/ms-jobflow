import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class ProfileService {
    
  constructor(private readonly natsService: NatsService) {}

  async remove(id: number) {
    return await this.natsService.send('profile.remove', { id });
  }
  async find(sub: number) {
    return await this.natsService.send('profile.find', { sub });
  }
  async create(createProfileDto: CreateProfileDto, sub: number) {
    return await this.natsService.send('profile.create', {
      createProfileDto,
      sub,
    });
  }
}
