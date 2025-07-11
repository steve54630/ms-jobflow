import { Injectable } from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class LangService {
  constructor(private readonly natsService: NatsService) {}

  async findAll() {
    return this.natsService.send('lang.findAll', {});
  }
  async findMemberLang(sub: number) {
    return this.natsService.send('lang.findMemberLang', { sub });
  }
  async create(createLangDto: CreateLangDto, sub: number) {
    return this.natsService.send('lang.create', { createLangDto, sub });
  }
  async remove(id: number, sub: number) {
    return this.natsService.send('lang.remove', { id, sub });
  }
}
