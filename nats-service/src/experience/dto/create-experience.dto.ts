import { IsNotEmpty, IsDate, IsOptional, IsBoolean, IsString } from "class-validator";

export class CreateExperienceDto {

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
      description: string;
      
}
