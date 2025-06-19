import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CV from 'src/cv/entity/cv.schema';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  async append(id: string, select: string, value: string) {
    return await this.cvModel.findByIdAndUpdate(
      id,
      { $push: { [select]: value } },
      { new: true },
    );
  }

  async delete(id: string, select: string, value: string) {
    return await this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { [select]: value } },
      { new: true },
    );
  }
}
