import { Document } from "mongoose";
import { Post } from "./post";
import { User } from "./user";

export interface Comment extends Document {
  comment: string;
  userId: User;
  post: Post;
  createdAt: Date;
}
