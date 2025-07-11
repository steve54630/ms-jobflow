import { Injectable } from '@nestjs/common';
import { CreateMadSkillDto } from 'src/mad-skills/dto/create-madskill.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class CVMadSkillsService {
  constructor(private readonly natsService: NatsService) {}

  async add(id: string, mad_skills: CreateMadSkillDto, sub: number) {
    return await this.natsService.send('cv.mad_skills.add', {
      id,
      mad_skills,
      sub,
    });
  }
  remove(id: string, mad_skillsId: number, sub: number) {
    return this.natsService.send('cv.mad_skills.delete', {
      id,
      mad_skillsId,
      sub,
    });
  }
}
