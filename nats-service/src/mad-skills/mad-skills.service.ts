import { Injectable } from '@nestjs/common';
import { CreateMadSkillDto } from './dto/create-madskill.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class MadSkillsService {

  constructor(private readonly natsService: NatsService) {}
  
  async remove(id: number, sub: number) {
    return this.natsService.send('madskill.remove', { id, sub });
  }
  async findMemberMadSkills(sub: number) {
    return this.natsService.send('madskill.find', { sub });
  }
  async create(createSkillDto: CreateMadSkillDto, sub: number) {
    return this.natsService.send('madskill.create', { createSkillDto, sub });
  }
}
