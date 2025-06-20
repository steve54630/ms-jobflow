import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { CVActivitiesService } from './activities.service';
import { Request } from 'express';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activityService: CVActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto, @Req() req: Request) {
    return this.activityService.create(createActivityDto, req.user!['sub']);
  }

  @Get('member')
  findAll(@Req() req: Request) {
    return this.activityService.findAll(req.user!['sub']);
  }

  @Patch(':activityId')
  update(
    @Param('activityId', ParseIntPipe) id: number,
    @Body() updateActivityDto: UpdateActivityDto,
    @Req() req: Request,
  ) {
    return this.activityService.update(id, updateActivityDto, req.user!['sub']);
  }

  @Delete(':activityId')
  remove(@Param('activityId') id: string, @Req() req: Request) {
    return this.activityService.remove(id, req.user!['sub']);
  }
}
