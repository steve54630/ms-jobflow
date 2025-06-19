import { Prop } from '@nestjs/mongoose';

class Activity {

  @Prop({type: Number, required: true })
  id?: number;

  @Prop({type: String, required: true })
  title: string;

  @Prop({type: String })
  description: string;
  
  @Prop({type: Date, required: true })
  start_date: Date;

  end_date: Date;
}

export default Activity