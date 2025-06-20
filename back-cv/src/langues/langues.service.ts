import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from 'src/cv/entity/cv.schema';
import Langue from './entity/langues.entity';

@Injectable()
export class LanguesService {
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  delete(id: string, langueId: number) {
    return this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { activities: langueId } },
      { new: true },
    );
  }

  add(id: string, activity: Langue) {
    return this.cvModel.findByIdAndUpdate(
      id,
      {
        $push: { langues: Langue },
      },
      { new: true },
    );
  }
}
