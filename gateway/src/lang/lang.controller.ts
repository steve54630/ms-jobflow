import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { LangService } from './lang.service';
import { Request } from 'express';
import { CreateLangDto } from './dto/create-lang.dto';

@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @Get()
  findAll() {
    return this.langService.findAll();
  }

  @Get('member')
  findMemberLang(@Req() req: Request) {
    return this.langService.findMemberLang(req.user!['sub']);
  }

  @Post()
  create(@Body() createLangDto: CreateLangDto, @Req() req: Request) {
    return this.langService.create(createLangDto, req.user!['sub']);
  }

  @Delete(':lang_id')
  remove(@Param('lang_id', ParseIntPipe) id: number, @Req() req: Request) {
    return this.langService.remove(id, req.user!['sub']);
  }
}
