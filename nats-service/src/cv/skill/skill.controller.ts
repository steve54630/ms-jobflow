
import { Controller, Post, Body, Param, Delete, ParseIntPipe, Req } from '@nestjs/common';
import { CVSkillsService } from './skill.service';
import { Request } from 'express';
import { CreateSkillDto } from 'src/skills/dto/create-skill.dto';

@Controller('cv/:cvId/skills')
export class CvSkillsController {
  constructor(private readonly skillsService: CVSkillsService) {}

  @Post()
  async add(
    @Param('cvId', ParseIntPipe) cvId: number,
    @Body() dto: CreateSkillDto,
    @Req() req : Request
  ) {
    return this.skillsService.add(cvId, dto, req.user!['sub']);
  }

  @Delete(':skillId')
  async removeSkillFromCV(
    @Param('cvId', ParseIntPipe) cvId: number,
    @Param('skillId', ParseIntPipe) skillId: number,
    @Req() req : Request
  ) {
    return this.skillsService.remove(cvId, skillId, req.user!['sub']);
  }
}
