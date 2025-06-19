import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOfferDto {

    @IsOptional()
    @IsNumber()
    member_id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    ftid: string;

    @IsOptional()
    @IsString()
    location: string;

    @IsOptional()
    @IsString()
    contract_type: string;

    @IsOptional()
    @IsString()
    experience_length: string;

    @IsOptional()
    @IsString()
    professional_field: string;

    @IsOptional()
    @IsString()
    work_time: string;

    @IsOptional()
    @IsString()
    salary: string;

    @IsOptional()
    @IsBoolean()
    handy_friendly;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    update_ft: string;

}

