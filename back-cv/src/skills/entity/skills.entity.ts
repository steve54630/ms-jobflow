import { Prop, Schema } from "@nestjs/mongoose";

@Schema({_id: false})
class Skill {

  @Prop({ type: Number, required: true })
  id?: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, enum: ['soft', 'hard'], required: true })
  category: 'soft' | 'hard';

}

export default Skill
