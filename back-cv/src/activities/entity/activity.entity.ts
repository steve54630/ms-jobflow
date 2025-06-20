import { Prop, Schema } from '@nestjs/mongoose';

@Schema({_id: false})
class Activity {

  @Prop({type: Number, required: true })
  id?: number;

  @Prop({type: String, required: true })
  title: string;

  @Prop({type: String })
  description: string;
  
  @Prop({type: Date, required: true })
  start_date: Date;

  @Prop({type: Date, required: true })
  end_date: Date;

  @Prop({type: String, required: true })
  location: string;

  @Prop({type: Number, required: true })
  member_id: number;
}

export default Activity