import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { EducationService } from './education.service';
import { Request } from 'express';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Controller('educations')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  /**
   * Crée une nouvelle formation
   * @param createEducationDto Les informations de la formation créée
   * @param req La requête
   * @returns La formation crée
   */
  async create(@Body() createEducationDto: CreateEducationDto, @Req() req: Request) {
    return await this.educationService.create(createEducationDto, req.user!['sub']);
  }

  @Get('member')
  /**
   * Retourne toutes les formations d'un membre
   * @param id L'ID du membre
   * @returns Les formations du membre
   */
  async findAll(@Req() req : Request) {
    return await this.educationService.findAll(req.user!['sub']);
  }

  
  @Patch(':educationId')
  /**
   * Modifie une formation existante
   * @param id L'ID de la formation à modifier
   * @param updateEducationDto Les informations de la formation modifiée
   * @param req La requête
   * @returns La formation modifiée
   */
  async update(@Param('educationId', ParseIntPipe) id: number, @Body() updateEducationDto: UpdateEducationDto, @Req() req: Request) {
    return await this.educationService.update(id, updateEducationDto, req.user!['sub']);
  }

  
  @Delete(':educationId')
  /**
   * Supprime une formation existante
   * @param id L'ID de la formation à supprimer
   * @returns La formation supprimée
   */
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    return await this.educationService.remove(id, req.user!['sub']);
  }
}

