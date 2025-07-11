import { IsNotEmpty, IsString } from "class-validator";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";

export class CreateCVProfileDto {

    @IsString()
    @IsNotEmpty()
    select : keyof CreateProfileDto

    @IsString()
    @IsNotEmpty()
    value : string
    
}