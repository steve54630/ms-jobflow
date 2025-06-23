import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CV } from 'src/cv/entity/cv.schema';
import MadSkill from './entity/mad_skills.entity';

@Injectable()
export class MadSkillsService {
    
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  async add(id: string, madskill : MadSkill) {
    console.log("🚀 ~ MadSkillsService ~ add ~ madskill:", madskill)
    return await this.cvModel.findByIdAndUpdate(
      id,
      {
        $push: { madskills: madskill },
      },
      { new: true },
    );
  }

  async delete(id: string, madskillID: number) {
    return await this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { madskills: madskillID } },
      { new: true },
    );
  }
}
