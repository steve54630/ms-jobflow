import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { MadSkillsService } from './mad-skills.service';
import { CreateMadSkillDto } from './dto/create-madskill.dto';
import { Request } from 'express';

@Controller('mad-skills')
export class MadSkillsController {
  constructor(private readonly madSkillsService: MadSkillsService) {}

  @Post()
  create(@Body() createSkillDto: CreateMadSkillDto, @Req() req: Request) {
    return this.madSkillsService.create(createSkillDto, req.user!['sub']);
  }

  @Get('member')
  findMadMemberSkills(@Req() req: Request) {
    return this.madSkillsService.findMemberMadSkills(req.user!['sub']);
  }

  @Delete(':id')
  removeMadSkill(
    @Req() req: Request,
    @Param('id') id: string
  ) {
    return this.madSkillsService.remove(req.user!['sub'], +id);
  }
}
