import {
  Controller,
} from '@nestjs/common';
import { EducationService } from './education.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Controller()
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @MessagePattern('education.create')
  /**
   * Crée une nouvelle formation
   * @param createEducationDto Les informations de la formation créée
   * @param req La requête
   * @returns La formation crée
   */
  async create(
    @Payload()
    { sub, ...createEducationDto }: CreateEducationDto & { sub: number },
  ) {
    return await this.educationService.create(createEducationDto, sub);
  }

  @MessagePattern('education.findAll')
  /**
   * Retourne toutes les formations d'un membre
   * @param id L'ID du membre
   * @returns Les formations du membre
   */
  async findAll(@Payload() { sub }: { sub: number }) {
    return await this.educationService.findAll(sub);
  }

  @MessagePattern('education.update')
  /**
   * Modifie une formation existante
   * @param id L'ID de la formation à modifier
   * @param updateEducationDto Les informations de la formation modifiée
   * @param req La requête
   * @returns La formation modifiée
   */
  async update(
    @Payload()
    {
      id,
      sub,
      ...updateEducationDto
    }: UpdateEducationDto & { id: number; sub: number },
  ) {
    return await this.educationService.update(id, updateEducationDto, sub);
  }

  @MessagePattern('education.remove')
  /**
   * Supprime une formation existante
   * @param id L'ID de la formation à supprimer
   * @returns La formation supprimée
   */
  async remove(@Payload() { id, sub }: { id: number; sub: number }) {
    return await this.educationService.remove(id, sub);
  }
}
