import { Module } from '@nestjs/common';
import { LanguesService } from './langues.service';
import { LanguesController } from './langues.controller';
import { CvModule } from 'src/cv/cv.module';

@Module({
  imports: [CvModule],
  controllers: [LanguesController],
  providers: [LanguesService],
})
export class LanguesModule {}
