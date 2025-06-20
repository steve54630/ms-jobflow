import { Module } from '@nestjs/common';
import { CVLanguesService } from './langues.service';
import { CVLanguesController } from './langues.controller';

@Module({
  controllers: [CVLanguesController],
  providers: [CVLanguesService],
})
export class CVLanguesModule {}
