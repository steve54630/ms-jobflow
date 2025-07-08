import { Controller } from '@nestjs/common';
import { CvService } from './cv.service';
import { CV } from './entity/cv.schema';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @MessagePattern('cv.create')
  create(@Payload() { cv, sub }: { cv: CV; sub: number }) {
    return this.cvService.create(cv, sub);
  }


  @MessagePattern('cv.update')
  update(@Payload() { cv, sub }: { cv: Partial<CV>; sub: number }) {
    return this.cvService.update(cv, sub);  
  }

  @MessagePattern('cv.findAll')
  findAll(@Payload() { sub }: { sub: number }) {
    return this.cvService.findAll(sub);
  }

  @MessagePattern('cv.delete')
  delete(@Payload() { id, sub }: { id: string; sub: number }) {
    return this.cvService.delete(id, sub);
  }
}
