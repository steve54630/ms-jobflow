import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CvService } from 'src/cv/cv.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly cvService: CvService,
  ) {}

  @MessagePattern('cv.profile.append')
  async append(
    @Payload()
    {
      id,
      sub,
      select,
      value,
    }: {
      id: string;
      sub: number;
      select: string;
      value: string;
    },
  ) {
    await this.cvService.verifyCv(id, sub);
    return this.profileService.append(id, select, value);
  }

  @MessagePattern('cv.profile.delete')
  async delete(
    @Payload()
    {
      id,
      sub,
      select,
      value,
    }: {
      id: string;
      sub: number;
      select: string;
      value: string;
    },
  ) {
    await this.cvService.verifyCv(id, sub);
    return this.profileService.delete(id, select, value);
  }
}
