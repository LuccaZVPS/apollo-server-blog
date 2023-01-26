import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsString,
  IsEmail,
} from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  @MinLength(3)
  name: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(8)
  password: string;
  @IsEmail()
  email: string;
}
