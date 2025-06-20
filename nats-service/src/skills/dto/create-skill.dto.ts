import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSkillDto {

    @IsOptional()
    @IsNumber()
    id?: number

    @IsNotEmpty()
    @IsString()
    title: string

}
