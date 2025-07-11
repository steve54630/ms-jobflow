import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from 'src/education/dto/create-education.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class EductionsService {
  constructor(private readonly natsService: NatsService) {}

  async add(cvId: string, education: CreateEducationDto, sub: number) {
    return await this.natsService.send('cv.education.add', { id : cvId, education, sub });
  }
  async remove(cvId: string, educationId: number, sub: number) {
    return await this.natsService.send('cv.education.delete', { id : cvId, educationId, sub });
  }
}
