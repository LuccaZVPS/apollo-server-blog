import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsString,
  IsEmail,
  Matches,
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
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/, {
    message:
      "Password should have at least one number and one uppercase letter",
  })
  password: string;
  @IsEmail()
  email: string;
}
