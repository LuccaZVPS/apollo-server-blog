import { IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDTO {
  @IsNotEmpty()
  @IsString()
  comment: String;

  @IsNotEmpty()
  @IsString()
  postId: String;
}
