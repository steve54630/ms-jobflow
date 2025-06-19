import { Controller } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { CvService } from 'src/cv/cv.service';
import Education from './entity/education.entity';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class EducationsController {
  constructor(private readonly educationsService: EducationsService, private readonly cvService: CvService) {}

  @MessagePattern('cv.education.add')
  async add(@Payload() {id, sub, education}: { id: string; sub: number; education: Education },
  ) {
    await this.cvService.verifyCv(id, sub);
    return this.educationsService.add(id, education);
  }

  @MessagePattern('cv.education.delete')
  async delete(@Payload() { id, sub, educationId }: { id: string; sub: number; educationId: number }) {
    await this.cvService.verifyCv(id, sub);
    return this.educationsService.delete(id, educationId)
  }

}

