import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Request } from 'express';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './entities/experience.entity';

@Controller('experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  async create(
    @Body() createExperienceDto: CreateExperienceDto,
    @Req() req: Request,
  ): Promise<Experience> {
    return await this.experienceService.create(
      createExperienceDto,
      req.user!['sub'],
    );
  }

  @Get('/member/')
  async findAll(@Req() req: Request): Promise<Experience[]> {
    return await this.experienceService.findAll(req.user!['sub']);
  }

  @Patch(':experienceId')
  async update(
    @Param('experienceId', ParseIntPipe) id: number,
    @Body() updateExperienceDto: UpdateExperienceDto,
    @Req() req: Request,
  ) {
    return await this.experienceService.update(
      id,
      updateExperienceDto,
      req.user!['sub'],
    );
  }

  @Delete(':experienceId')
  async remove(
    @Param('experienceId', ParseIntPipe) id: number,
    @Req() req: Request,
  ) {
    return await this.experienceService.remove(id, req.user!['sub']);
  }
}
