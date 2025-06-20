import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from 'src/cv/entity/cv.schema';
import Experience from './entity/experience.entity';

@Injectable()
export class ExperiencesService {
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  delete(id: string, experiencesId: number) {
    return this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { experiences: experiencesId } },
      { new: true },
    );
  }

  add(id: string, experience: Experience) {
    return this.cvModel.findByIdAndUpdate(
      id,
      { $push: { experiences: experience } },
      { new: true },
    );
  }
}
