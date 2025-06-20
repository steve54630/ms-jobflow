import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { CVLanguesService } from './langues.service';
import { CreateLangDto } from 'src/lang/dto/create-lang.dto';
import { Request } from 'express';

@Controller('cv/:cvID/languages')
export class CVLanguesController {
  constructor(private readonly languesService: CVLanguesService) {}

  @Post()
  async addLanguagesToCV(
    @Param('cvId') cvId: string,
    @Body() dto: CreateLangDto,
    @Req() req: Request,
  ) {
    return this.languesService.add(cvId, dto, req.user!['sub']);
  }

  @Delete(':languageId')
  async removeLanguageFromCV(
    @Param('cvId') cvId: string,
    @Param('languageId', ParseIntPipe) languageId: number,
    @Req() req: Request,
  ) {
    return this.languesService.remove(cvId, languageId, req.user!['sub']);
  }
}
