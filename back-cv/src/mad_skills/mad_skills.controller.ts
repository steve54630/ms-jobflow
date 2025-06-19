import { Controller } from '@nestjs/common';
import { MadSkillsService } from './mad_skills.service';
import { CvService } from 'src/cv/cv.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import MadSkill from './entity/mad_skills.entity';

@Controller()
export class MadSkillsController {
  constructor(private readonly madSkillsService: MadSkillsService, private readonly cvService: CvService) {}

  @MessagePattern('cv.mad_skills.add')
  async add(
    @Payload() {id, sub, mad_skills }: { id: string, sub: number, mad_skills: MadSkill },

  ) {
    await this.cvService.verifyCv(id, sub);
    return this.madSkillsService.add(id, mad_skills)
  }

  @MessagePattern('cv.mad_skills.delete')
  async delete(
    @Payload() { id, sub, mad_skillsId }: { id: string; sub: number; mad_skillsId: number }
  ) {
    await this.cvService.verifyCv(id, sub)
    return this.madSkillsService.delete(id, mad_skillsId)
  }
}
