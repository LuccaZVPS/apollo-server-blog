import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
} from "class-validator";

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(10000)
  body: string;
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  categories: string;
}
