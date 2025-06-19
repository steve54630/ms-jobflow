import { PartialType } from '@nestjs/mapped-types';
import { CreateMadSkillDto } from './create-madskill.dto';

export class UpdateMadSkillDto extends PartialType(CreateMadSkillDto) {}
