import { Controller } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from '@prisma/client-data';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Controller()
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @MessagePattern('experience.create')
  async create(
    @Payload()
    {
      sub,
      createExperienceDto,
    }: {
      createExperienceDto: CreateExperienceDto;
      sub: number;
    },
  ): Promise<Experience> {
    return await this.experienceService.create(createExperienceDto, sub);
  }

  @MessagePattern('experience.findAll')
  async findAll(@Payload() { sub }: { sub: number }): Promise<Experience[]> {
    return await this.experienceService.findAll(sub);
  }

  @MessagePattern('experience.update')
  async update(
    @Payload()
    {
      id,
      sub,
      updateExperienceDto,
    }: {
      updateExperienceDto: UpdateExperienceDto;
      id: number;
      sub: number;
    },
  ) {
    return await this.experienceService.update(id, updateExperienceDto, sub);
  }

  @MessagePattern('experience.remove')
  async remove(@Payload() { id, sub }: { id: number; sub: number }) {
    return await this.experienceService.remove(id, sub);
  }
}
