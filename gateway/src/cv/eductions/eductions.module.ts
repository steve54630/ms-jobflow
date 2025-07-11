import { Module } from '@nestjs/common';
import { EductionsService } from './eductions.service';
import { CVEducationsController } from './eductions.controller';

@Module({
  controllers: [CVEducationsController],
  providers: [EductionsService],
})
export class EductionsModule {}
