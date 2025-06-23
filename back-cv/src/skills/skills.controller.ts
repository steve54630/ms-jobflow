import { Controller } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CvService } from 'src/cv/cv.service';
import Skill from './entity/skills.entity';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class SkillsController {
  constructor(
    private readonly skillsService: SkillsService,
    private readonly cvService: CvService,
  ) {}

  @MessagePattern('cv.skills.add')
  async add(
    @Payload()
    { id, sub, skill }: { id: string; sub: number; skill: Skill },
  ) {
    await this.cvService.verifyCv(id, sub);

    return this.skillsService.add(id, skill);
  }

  @MessagePattern('cv.skills.delete')
  async delete(
    @Payload()
    { id, sub, skillId }: { id: string; sub: number; skillId: number },
  ) {
    await this.cvService.verifyCv(id, sub);

    return this.skillsService.delete(id, skillId);
  }
}
