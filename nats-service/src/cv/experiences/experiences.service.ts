import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from 'src/experience/dto/create-experience.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class CVExperiencesService {
  constructor(private readonly natsService: NatsService) {}

  async remove(cvId: string, experienceId: number, sub: number) {
    return await this.natsService.send('cv.experiences.delete', {
      id: cvId,
      experienceId,
      sub,
    });
  }
  async add(cvId: string, experience: CreateExperienceDto, sub: number) {
    return await this.natsService.send('cv.experiences.add', {
      id: cvId,
      experience,
      sub,
    });
  }
}
