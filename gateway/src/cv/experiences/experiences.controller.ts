import { Body, Controller, Delete, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { CVExperiencesService } from './experiences.service';
import { Request } from 'express';

@Controller('cv/:cvId/experiences')
export class CVExperiencesController {
  constructor(private readonly experiencesService: CVExperiencesService) {}

  @Post()
  async add(
    @Param('cvId') cvId: string,
    @Body() dto: any,
    @Req() req: Request,
  ) {
    return this.experiencesService.add(
      cvId,
      dto.experience,
      req.user!['sub'],
    );
  }

  @Delete(':experienceId')
  async remove(
    @Param('cvId') cvId: string,
    @Param('experienceId', ParseIntPipe) experienceId: number,
    @Req() req: Request,
  ) {
    return this.experiencesService.remove(
      cvId,
      experienceId,
      req.user!['sub'],
    );
  }
}
