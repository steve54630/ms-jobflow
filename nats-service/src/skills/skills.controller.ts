import { Body, Controller, Delete, Get, Param, Patch, Req } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Request } from 'express';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  findAllSkills() {
    return this.skillsService.findAll();
  }

  @Get('member')
  findMemberSkills(@Req() req: Request) {
    return this.skillsService.findMemberSkills(req.user!['sub']);
  }

  @Patch()
  update(@Req() req: Request, @Body() createSkillDto: UpdateSkillDto) {
    return this.skillsService.update(req.user!['sub'], createSkillDto);
  }

  @Delete('/:category/:id')
  removeHardSkill(
    @Req() req: Request,
    @Param('id') id: string,
    @Param('category') category: "hard" | "soft",
  ) {
    return this.skillsService.remove(req.user!['sub'], +id, category);
  }
}
