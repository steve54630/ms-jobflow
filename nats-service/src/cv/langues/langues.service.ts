import { Injectable } from '@nestjs/common';
import { CreateLangDto } from 'src/lang/dto/create-lang.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class CVLanguesService {

    constructor(private readonly natsService: NatsService) {}

  async add(cvId: string, langue: CreateLangDto, sub: number) {
    return await this.natsService.send('cv.langues.add', { id : cvId, langue, sub });
  }
  async remove(cvId: string, languageId: number, sub: number) {
    return await this.natsService.send('cv.langues.delete', { id : cvId, languageId, sub });
  }
}
