import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEducationDto {
  
  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsOptional()
  @IsDate()
  end_date: Date;

  @IsNotEmpty()
  @IsBoolean()
  is_obtained: boolean;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  school_name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  description: string;
}
