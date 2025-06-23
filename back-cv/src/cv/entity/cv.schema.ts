import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import Activity from 'src/activities/entity/activity.entity';
import Education from 'src/educations/entity/education.entity';
import Experience from 'src/experiences/entity/experience.entity';
import Langue from 'src/langues/entity/langues.entity';
import MadSkill from 'src/mad_skills/entity/mad_skills.entity';
import Profile from 'src/profile/entity/profile.entity';
import Skill from 'src/skills/entity/skills.entity';

@Schema({ timestamps: true })
export class CV {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ required: false })
  cv_title?: string;

  @Prop({ type: SchemaFactory.createForClass(Profile), required: false, _id: false })
  profile?: Profile;

  @Prop({ required: false })
  tagline?: string;

  @Prop({ type: Number, required: true })
  member_id: number;

  @Prop({ type: [SchemaFactory.createForClass(Experience)], _id: false, required: false })
  experiences: Experience[];

  @Prop({ type: [SchemaFactory.createForClass(Education)], _id: false, required: false })
  educations: Education[];

  @Prop({ type: [SchemaFactory.createForClass(Langue)], _id: false, required: false })
  languages: Langue[];

  @Prop({ type: [SchemaFactory.createForClass(Skill)], _id: false, required: false })
  skills: Skill[];

  @Prop({ type: [SchemaFactory.createForClass(MadSkill)], _id: false, required: false })
  madskills: MadSkill[];

  @Prop({ type: [SchemaFactory.createForClass(Activity)], _id: false, required: false })
  activities: Activity[];
}

export type CvDocument = HydratedDocument<CV>
export const CVSchema = SchemaFactory.createForClass(CV);
