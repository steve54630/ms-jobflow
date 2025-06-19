import {
  Controller
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern('profile.create')
  create(@Payload() {sub, ...createProfileDto} : CreateProfileDto & { sub: number }) {

    return this.profileService.create(createProfileDto, sub);
  }

  @MessagePattern('profile.find')
  find(@Payload() {sub} : { sub: number }) {
    return this.profileService.find(sub);
  }

  @MessagePattern('profile.remove')
  remove(@Payload() {id} : { id: number }) {
     return this.profileService.remove(id);
  }
}
