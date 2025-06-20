import { Prop, Schema } from "@nestjs/mongoose";

@Schema({_id: false})
class Profile {

  @Prop({ type: Number })
  id?: number;

  @Prop({ type: String })
  picture?: string;

  @Prop({ type: String })
  firstname?: string;

  @Prop({ type: String })
  lastname?: string;

  @Prop({ type: String })
  email?: string;

  @Prop({ type: String })
  phone?: string;

  @Prop({ type: String })
  location?: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: Boolean })
  has_car?: boolean;
}

export default Profile