import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  username: string;

  @IsEmail(
    {},
    {
      message: "Le format de l'email est incorrect",
    }
  )
  email: string;

  @IsStrongPassword(
    {
      minLength: 6,
      minNumbers: 0,
      minUppercase: 1,
      minSymbols: 0,
      minLowercase: 1,
    },
    {
      message:
        'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et au moins 6 caractères',
    }
  )
  password: string;
}
