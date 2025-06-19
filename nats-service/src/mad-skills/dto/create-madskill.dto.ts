import { IsNotEmpty, IsString } from "class-validator";

export class CreateMadSkillDto {

    @IsNotEmpty()
    @IsString()
    title: string


    @IsNotEmpty()
    @IsString()
    category: 'interest' | 'hobbies'
}
