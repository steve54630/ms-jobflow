import {
  Controller
} from '@nestjs/common';
import { MadSkillsService } from './madskills.service';
import { CreateMadSkillDto } from './dto/create-madskill.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class MadSkillsController {
  constructor(private readonly madSkillsService: MadSkillsService) {}

  @MessagePattern('madskill.create')
  create(
    @Payload() { sub, ...createSkillDto }: CreateMadSkillDto & { sub: number },
  ) {
    return this.madSkillsService.create(createSkillDto, sub);
  }

  @MessagePattern('madskill.find')
  findMadMemberSkills(@Payload() { sub }: { sub: number }) {
    return this.madSkillsService.findMemberMadSkills(sub);
  }

  @MessagePattern('madskill.remove')
  removeMadSkill(@Payload() { id, sub }: { id: number; sub: number }) {
    return this.madSkillsService.remove(sub, id);
  }
}
