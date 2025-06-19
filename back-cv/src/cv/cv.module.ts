import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { CVSchema } from './entity/cv.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'CV', schema: CVSchema}])],
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}
