import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateActivityDto {

  @IsOptional()
  @IsNumber()
  id? : number

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsOptional()
  @IsDate()
  end_date: Date;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  company_name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  detail: string;
}
