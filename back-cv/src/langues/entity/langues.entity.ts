import { Prop } from "@nestjs/mongoose";

class Langue {
  @Prop({ type: Number, required: true })
  id: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Date })
  level?: string;
}

export default Langue