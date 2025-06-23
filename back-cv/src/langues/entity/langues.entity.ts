import { Prop, Schema } from "@nestjs/mongoose";

@Schema({_id: false})
class Langue {
  @Prop({ type: Number, required: true })
  id: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String })
  level?: string;
}

export default Langue