import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CV from 'src/cv/entity/cv.schema';
import Skill from './entity/skills.entity';

@Injectable()
export class SkillsService {

    constructor(
    @InjectModel(CV.name) private readonly cvModel: Model<CV>
  ) {}

  delete(id: string, skillId: number) {
    return this.cvModel.findByIdAndUpdate(
      id,
      { $pull: { activities: skillId } },
      { new: true },
    );
  }

  add(id: string, skill: Skill) {
    return this.cvModel.findByIdAndUpdate(
      id,
      {
        $push: { skills: skill },
      },
      { new: true },
    );
  }

}
