import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CvService } from './cv.service';
import { Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';

@Controller('cvs')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Get()
  getMemberCVs(@Req() req : Request) {
    console.log("🚀 ~ CvController ~ getMemberCVs ~ req:", req.user)
    return this.cvService.getMemberCVs(req.user!['sub']);
  }

  @Post()
  create(@Body() createCvDto: CreateCvDto,@Req() req: Request) {
    console.log("🚀 ~ CvController ~ create ~ req:", req)
    
    return this.cvService.create(createCvDto, req.user!['sub']);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request) {
    return this.cvService.delete(id, req.user!['sub']);
  }

  @Get(':id')
    async findOne(@Param('id') id: string, @Req() req: Request) {
        const memberId = req.user!['sub'];
        return await this.cvService.findOne(id, memberId);
    }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCvDto, @Req() req: Request) {
    console.log("🚀 ~ CvController ~ update ~ id:", id)
    const memberId = req.user!['sub'];
    return this.cvService.update(id, data, memberId);
  }
}
