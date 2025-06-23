import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from 'src/cv/entity/cv.schema';
import Activity from './entity/activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  delete(id: string, activityId: number) {
    return this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { activities: { id: activityId } } },
      { new: true },
    );
  }

  add(id: string, activity: Activity) {
    console.log('🚀 ~ ActivitiesService ~ add ~ activity:', activity);
    console.log('🚀 ~ ActivitiesService ~ add ~ id:', id);

    if (!activity || typeof activity !== 'object') {
      console.error('❌ Activity est invalide :', activity);
      throw new Error('Activity invalide');
    }

    return this.cvModel.findByIdAndUpdate(
      id,
      {
        $push: { activities: [activity] },
      },
      { new: true },
    );
  }
}
