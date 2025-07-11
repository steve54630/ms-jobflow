import { IsNotEmpty, IsString } from "class-validator";

export class CreateCvDto {
    @IsNotEmpty()
    @IsString()
    title: string;
}
