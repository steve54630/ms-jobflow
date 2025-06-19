import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Request } from 'express';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto, @Req() req: Request) {
    return this.profileService.create(createProfileDto, req.user!['sub']);
  }

  @Get('member')
  find(@Req() req: Request) {
    return this.profileService.find(req.user!['sub']);
  }

  @Delete(':profileId')
  remove(@Param('profileId', ParseIntPipe) id: number, @Req() req: Request) {
     return this.profileService.remove(id);
  }
}
