import {IsBoolean, IsNotEmpty} from "class-validator";

export class Profile {

  @IsNotEmpty()
  @IsBoolean()
  picture: boolean

  @IsNotEmpty()
  @IsBoolean()
  firstname : boolean;

  @IsNotEmpty()
  @IsBoolean()
  lastname:boolean;

  @IsNotEmpty()
  @IsBoolean()
  email: boolean  
  
  @IsNotEmpty()
  @IsBoolean()
  phone: boolean  
  
  @IsNotEmpty()
  @IsBoolean()
  location:boolean;

  @IsNotEmpty()
  @IsBoolean()
  has_car: boolean}