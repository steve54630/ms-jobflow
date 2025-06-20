import { Injectable } from '@nestjs/common';
import { CV } from './entity/cv.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class CvService {
  constructor(@InjectModel(CV.name) private readonly cvModel: Model<CV>) {}

  async delete(id: string, sub: number) {
    await this.verifyCv(id, sub);

    return this.cvModel.findByIdAndDelete(id);
  }

  async findAll(sub: number) {
    return await this.cvModel.find({ member_id: sub });
  }

  async create(cv: CV, sub: number) {
    return await this.cvModel.create({ ...cv, member_id: sub });
  }

  async verifyCv(id: string, sub : number) {

    console.log("🚀 ~ CvService ~ verifyCv ~ id:", id)
    console.log("🚀 ~ CvService ~ verifyCv ~ sub:", sub)

    const cv = await this.cvModel.findById(id);
    
    console.log("🚀 ~ CvService ~ verifyCv ~ cv:", cv)

    if (!cv || cv.member_id !== sub) {
      throw new RpcException({ code: 404, message: 'Unauthorized' });
    }
  }
}
