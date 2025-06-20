import { Injectable } from '@nestjs/common';
import { NatsService } from 'src/nats/nats.service';
import { CreateSkillDto } from 'src/skills/dto/create-skill.dto';

@Injectable()
export class CVSkillsService {
  constructor(private readonly natsService: NatsService) {}

  async add(cvId: number, dto: CreateSkillDto, sub: number) {
    return await this.natsService.send('cv.skill.add', { id: cvId, dto, sub });
  }
  async remove(cvId: number, skillId: number, sub: number) {
    return await this.natsService.send('cv.skill.delete', { id: cvId, skillId, sub });
  }
}
