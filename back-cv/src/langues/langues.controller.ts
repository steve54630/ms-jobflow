import { Controller } from '@nestjs/common';
import { LanguesService } from './langues.service';
import { CvService } from 'src/cv/cv.service';
import Langue from './entity/langues.entity';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class LanguesController {
  constructor(private readonly languesService: LanguesService, private readonly cvService: CvService) {}

  @MessagePattern('cv.langues.add')
  async add(
    @Payload() {id, sub, langue }: { id: string, sub: number, langue: Langue },

  ) {
    await this.cvService.verifyCv(id, sub);
    return this.languesService.add(id, langue)
  }

  @MessagePattern('cv.langues.delete')
  async delete(
    @Payload() { id, sub, langueId }: { id: string; sub: number; langueId: number }
  ) {
    await this.cvService.verifyCv(id, sub)
    return this.languesService.delete(id, langueId)
  }

}
