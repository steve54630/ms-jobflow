import { Prop, Schema } from '@nestjs/mongoose';

@Schema({_id: false})
class Education {
  @Prop({ type: Number, required: true })
  id: number;

  @Prop({ type: Date, required: true })
  start_date: Date;

  @Prop({ type: Date })
  end_date?: Date;

  @Prop({ type: Boolean })
  is_obtained?: boolean;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({type: String, required: true })
  school_name: string;

  @Prop({type: String, required: true })
  location: string;

  @Prop({type: String })
  description?: string;
}

export default Education