import { Module } from '@nestjs/common';
import { CVExperiencesService } from './experiences.service';
import { CVExperiencesController } from './experiences.controller';

@Module({
  controllers: [CVExperiencesController],
  providers: [CVExperiencesService],
})
export class CVExperiencesModule {}
