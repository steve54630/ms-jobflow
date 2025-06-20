import { Controller, Post, Body, Param, Delete, ParseIntPipe, Get, Req } from '@nestjs/common';
import { CVMadSkillsService } from './mad_skills.service';
import { Request } from 'express';
import { CreateMadSkillDto } from 'src/mad-skills/dto/create-madskill.dto';

@Controller('cv/:cvId/madskills')
//@UseGuards(JwtAuthGuard)
export class CvMadSkillsController {
  constructor(private readonly madSkillsService: CVMadSkillsService) {}

  @Post()
  async addMadSkillsToCV(
    @Param('cvId') cvId: string,
    @Body() dto: CreateMadSkillDto,
    @Req() req : Request
  ) {
    return this.madSkillsService.add(cvId, dto, req.user!['sub']);
  }

  @Delete(':madskillId')
  async removeMadSkillFromCV(
    @Param('cvId') cvId: string,
    @Param('madskillId', ParseIntPipe) madskillId: number,
    @Req() req : Request
  ) {
    return this.madSkillsService.remove(cvId, madskillId, req.user!['sub']);
  }
}
