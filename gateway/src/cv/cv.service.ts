import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { NatsService } from 'src/nats/nats.service';
import { UpdateCvDto } from './dto/update-cv.dto';

@Injectable()
export class CvService {
  
  constructor(private readonly natsService: NatsService) {}
  
  async create(createCvDto: CreateCvDto, sub: number) {
    return await this.natsService.send('cv.create', { createCvDto, sub });
  }
  async update(id: string, data: UpdateCvDto, sub: number) {
    return await this.natsService.send('cv.update', { id, data, sub });
  }
  async delete(id: string, sub: number) {
    return await this.natsService.send('cv.delete', { id, sub });
  }
  async getMemberCVs(sub: number) {
    return await this.natsService.send('cv.findAll', { sub });
  }

  async findOne(id: string, memberId: any) {
    return await this.natsService.send('cv.findOne', { id, sub : memberId });
  }
}
