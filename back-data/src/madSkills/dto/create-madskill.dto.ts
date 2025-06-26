import { $Enums } from '@prisma/client-data';
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMadSkillDto {

    @IsNotEmpty()
    @IsString()
    title: string


    @IsNotEmpty()
    @IsString()
    category: $Enums.MadSkills
}
