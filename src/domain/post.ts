import { Document } from "mongoose";
import { User } from "./user";

export interface Post extends Document {
  body: string;
  categories: string[];
  _id: string;
  user: User;
  title: string;
  createdAt: Date;
}
