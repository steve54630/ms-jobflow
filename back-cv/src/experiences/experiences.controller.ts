import { Controller } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import Experience from './entity/experience.entity';
import { CvService } from 'src/cv/cv.service';

@Controller()
export class ExperiencesController {
  constructor(
    private readonly experiencesService: ExperiencesService,
    private readonly cvService: CvService,
  ) {}

  @MessagePattern('cv.experiences.add')
  async add(
    @Payload()
    {
      id,
      sub,
      experience,
    }: {
      id: string;
      sub: number;
      experience: Experience;
    },
  ) {
    await this.cvService.verifyCv(id, sub);
    return this.experiencesService.add(id, experience);
  }

  @MessagePattern('cv.experiences.delete')
  async delete(
    @Payload()
    {
      id,
      sub,
      experienceId,
    }: {
      id: string;
      sub: number;
      experienceId: number;
    },
  ) {
    await this.cvService.verifyCv(id, sub);
    return this.experiencesService.delete(id, experienceId);
  }
}
