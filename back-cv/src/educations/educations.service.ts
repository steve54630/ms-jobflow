import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from 'src/cv/entity/cv.schema';
import Education from './entity/education.entity';

@Injectable()
export class EducationsService {

    constructor(
        @InjectModel(CV.name) private readonly cvModel: Model<CV>
      ) {}


      add(id: string, education: Education) {
        return this.cvModel.findByIdAndUpdate(
          id, {
            $push: { educations: education },
          },
          { new: true },
        );
      }

      delete(id: string, educationId: number) {
        return this.cvModel.findByIdAndUpdate(
          id, {
             $pull: { educations: educationId }
          },
          { new: true }
        )
      }
}
