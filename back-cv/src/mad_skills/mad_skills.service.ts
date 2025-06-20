import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from 'src/cv/entity/cv.schema';
import Langue from 'src/langues/entity/langues.entity';

@Injectable()
export class MadSkillsService {
    
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  async add(id: string, langue: Langue) {
    return await this.cvModel.findByIdAndUpdate(
      id,
      {
        $push: { langues: langue },
      },
      { new: true },
    );
  }

  async delete(id: string, langueId: number) {
    return await this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { langues: langueId } },
      { new: true },
    );
  }
}
