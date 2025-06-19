import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { CvModule } from 'src/cv/cv.module';

@Module({
  imports: [CvModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
