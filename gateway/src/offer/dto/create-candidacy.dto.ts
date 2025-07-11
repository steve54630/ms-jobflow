import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCandidacyDto {

  @IsString()
  ftid?: string;

  @IsInt()
  cv_id: number;

  @IsOptional()
  @IsInt()
  job_offer_id?: number;

  @IsOptional()
  @IsString()
  description?: string;
}