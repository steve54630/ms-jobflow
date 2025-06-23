import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Request } from 'express';
import { $Enums } from '@prisma/client';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @MessagePattern('skill.findAll')
  findAllSkills() {
    return this.skillsService.findAll();
  }

  @MessagePattern('skill.findMemberSkills')
  findMemberSkills(@Payload() { sub }: { sub: number }) {
    return this.skillsService.findMemberSkills(sub);
  }

  @MessagePattern('skill.update')
  update(
    @Payload() { sub, createSkillDto }: { createSkillDto: UpdateSkillDto ; sub: number },
  ) {
    return this.skillsService.update(sub, createSkillDto);
  }

  @MessagePattern('skill.remove')
  removeHardSkill(
    @Payload()
    { id, sub, category }: { id: number; sub: number; category: $Enums.Skills },
  ) {
    return this.skillsService.remove(sub, id, category);
  }
}
