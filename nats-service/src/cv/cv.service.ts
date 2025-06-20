import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class CvService {
  constructor(private readonly natsService: NatsService) {}

  async create(createCvDto: CreateCvDto, sub: number) {
    return await this.natsService.send('cv.create', { createCvDto, sub });
  }
  async delete(id: string, sub: number) {
    return await this.natsService.send('cv.delete', { id, sub });
  }
  async getMemberCVs(sub: number) {
    return await this.natsService.send('cv.findAll', { sub });
  }
}
