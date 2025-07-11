import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCandidacyDto {

  @IsString()
  ftid?: string;

  @IsString()
  cv_id: string;

  @IsOptional()
  @IsInt()
  job_offer_id?: number;

  @IsOptional()
  @IsString()
  description?: string;
}