import { Controller } from '@nestjs/common';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class LangController {
  constructor(private readonly langService: LangService) {}

  @MessagePattern('lang.findAll')
  findAll() {
    return this.langService.findAll();
  }

  @MessagePattern('lang.findMemberLang')
  findMemberLang(@Payload() { sub }: { sub: number }) {
    return this.langService.findMemberLang(sub);
  }

  @MessagePattern('lang.create')
  create(
    @Payload() { sub, ...createLangDto }: CreateLangDto & { sub: number },
  ) {
    return this.langService.create(createLangDto, sub);
  }

  @MessagePattern('lang.remove')
  remove(@Payload() { id, sub }: { id: number; sub: number }) {
    return this.langService.remove(id, sub);
  }
}
