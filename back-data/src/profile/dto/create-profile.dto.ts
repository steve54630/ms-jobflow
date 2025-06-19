import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, IsUrl } from "class-validator";

export class CreateProfileDto {

  @IsOptional()
  @IsUrl()
  picture?: string;

  @IsOptional()
  @IsString()
  firstname?: string;

  @IsOptional()
  @IsString()
  lastname?: string;

  @IsOptional()
  @IsEmail()
  email? : string

  @IsOptional()
  @IsPhoneNumber("FR")
  phone?: string;

  @IsOptional()
  @IsString()
  location?: string;
  
  @IsOptional()
  @IsBoolean()
  has_car: boolean

  @IsOptional()
  @IsString()
  description?: string
}
