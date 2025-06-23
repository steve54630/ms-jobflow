import { Prop, Schema } from '@nestjs/mongoose';

@Schema({_id: false})
class Experience {
  @Prop({ type: Number, required: true })
  id: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Date, required: true })
  start_date: Date;

  @Prop({ type: Date, required: true })
  end_date: Date;

  @Prop({ type: String, required: true })
  company_name: string;

  @Prop({ type: String, required: true })
  location: string;
}

export default Experience