import { Prop, Schema } from "@nestjs/mongoose";

@Schema({_id: false})
class MadSkill {

  @Prop({ type: Number, required: true })
  id : number

  @Prop({ type: String, required: true })
  title : string

  @Prop({ type: String, enum: ['interest', 'hobbies'], required: true })
  description : 'interest' | 'hobbies'
}

export default MadSkill