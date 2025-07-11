import { Injectable } from '@nestjs/common';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class SkillsService {
  constructor(private readonly natsService: NatsService) {}

  async remove(sub: number, id: number, category: 'hard' | 'soft') {
    return await this.natsService.send('skill.remove', { sub, id, category });
  }
  async update(sub: number, createSkillDto: UpdateSkillDto) {
    return await this.natsService.send('skill.update', { sub, createSkillDto });
  }
  async findMemberSkills(sub: number) {
    return await this.natsService.send('skill.findMemberSkills', { sub });
  }
  async findAll() {
    return await this.natsService.send('skill.findAll', {});
  }
}
