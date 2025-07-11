import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateCVProfileDto } from './dto/create-cvprofile.dto';
import { Request } from 'express';

@Controller('cv/:cvId/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  append(
    @Body() createProfileDto: CreateCVProfileDto,
    @Req() req: Request,
    @Param('cvId') cvId: string,
  ) {
    return this.profileService.create(createProfileDto, req.user!['sub'], cvId);
  }

  @Delete(':select/:value')
  delete(
    @Param('cvId') cvId: string,
    @Req() req: Request,
    @Query('select') select: string,
    @Query('value') value: string,
  ) {
    return this.profileService.delete(cvId, req.user!['sub'], select, value);
  }
}
