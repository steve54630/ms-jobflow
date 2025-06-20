import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { EductionsService } from './eductions.service';
import { CreateEducationDto } from 'src/education/dto/create-education.dto';
import { Request } from 'express';

@Controller('cv/:cvId/educations')
export class CVEducationsController {
  constructor(private readonly educationsService: EductionsService) {}
  @Post()
  async addEducationsToCV(
    @Param('cvId') cvId: string,
    @Body() dto: CreateEducationDto,
    @Req() req: Request,
  ) {
    return this.educationsService.add(cvId, dto, req.user!['sub']);
  }

  @Delete(':educationId')
  async removeEducationFromCV(
    @Param('cvId') cvId: string,
    @Param('educationId', ParseIntPipe) educationId: number,
    @Req() req: Request,
  ) {
    return this.educationsService.remove(cvId, educationId, req.user!['sub']);
  }
}
