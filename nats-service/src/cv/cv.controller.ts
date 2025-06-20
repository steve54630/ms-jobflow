import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CvService } from './cv.service';
import { Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCvDto } from './dto/create-cv.dto';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Get()
  getMemberCVs(@Req() req : Request) {
    return this.cvService.getMemberCVs(req.user!['sub']);
  }

  @Post()
  create(@Body() createCvDto: CreateCvDto, req: Request) {
    return this.cvService.create(createCvDto, req.user!['sub']);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request) {
    return this.cvService.delete(id, req.user!['sub']);
  }
}
