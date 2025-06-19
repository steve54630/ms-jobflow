import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class AuthDto {
  
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 0,
    minUppercase: 1,
    minSymbols: 0,
    minLowercase: 1,
  })
  password: string;
}
