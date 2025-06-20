import { Injectable } from '@nestjs/common';
import { CreateCVProfileDto } from './dto/create-cvprofile.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class ProfileService {
  constructor(private readonly natsService: NatsService) {}

  create(createProfileDto: CreateCVProfileDto, sub: number, cvId: string) {
    return this.natsService.send('cv.profile.create', {
      select: createProfileDto.select,
      value: createProfileDto.value,
      sub,
      id : cvId,
    });
  }
  
  async delete(cvId: string, sub: number, select: string, value: string) {
    return await this.natsService.send('cv.profile.delete', {
      id: cvId,
      sub,
      select,
      value,
    });
  }
}
