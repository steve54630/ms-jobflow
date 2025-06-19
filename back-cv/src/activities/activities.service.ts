import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CV from 'src/cv/entity/cv.schema';
import Activity from './entity/activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  delete(id: string, activityId: number) {
    return this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { activities: activityId } },
      { new: true },
    );
  }

  add(id: string, activity: Activity) {
    return this.cvModel.findByIdAndUpdate(
      id,
      {
        $push: { activities: activity },
      },
      { new: true },
    );
  }
}
