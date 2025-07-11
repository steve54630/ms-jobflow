import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLangDto {

    @IsNotEmpty()
    @IsNumber()
    id : number

    @IsNotEmpty()
    @IsString()
    title : string

}
