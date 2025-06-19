import { Prop } from "@nestjs/mongoose";

class Skill {

  @Prop({ type: Number, required: true })
  id?: number;

  @Prop({ type: String, enum: ['soft', 'hard'], required: true })
  category: 'soft' | 'hard';

  @Prop({ type: Number, required: true })
  title: string;
}

export default Skill
