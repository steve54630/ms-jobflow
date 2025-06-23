import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { CVActivitiesService } from './activities.service';
import { CreateActivityDto } from 'src/activities/dto/create-activity.dto';
import { Request } from 'express';

@Controller('cv/:id/activities')
export class CVActivitiesController {
  constructor(private readonly activitiesService: CVActivitiesService) {}

  @Post()
  async add(
    @Param('id') cvId: string,
    @Body() dto: any,
    @Req() req: Request,
  ) {
    console.log("🚀 ~ CVActivitiesController ~ cvId:", cvId)

    return this.activitiesService.add(cvId, dto.activity, req.user!['sub']);
  }

  @Delete(':activityId')
  async remove(
    @Param('id') cvId: string,
    @Param('activityId', ParseIntPipe) activityId: number,
    @Req() req: Request,
  ) {
    return this.activitiesService.remove(cvId, activityId, req.user!['sub']);
  }
}
