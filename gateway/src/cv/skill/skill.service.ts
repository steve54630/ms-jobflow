import { Injectable } from '@nestjs/common';
import { NatsService } from 'src/nats/nats.service';
import { CreateSkillDto } from 'src/skills/dto/create-skill.dto';

@Injectable()
export class CVSkillsService {
  constructor(private readonly natsService: NatsService) {}

  async add(cvId: string, dto: CreateSkillDto, sub: number) {
    return await this.natsService.send('cv.skills.add', { id: cvId, skill : dto, sub });
  }
  async remove(cvId: string, skillId: number, sub: number) {
    return await this.natsService.send('cv.skills.delete', { id: cvId, skillId, sub });
  }
}
