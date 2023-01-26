import { CreatePostDTO } from "../use-cases/posts/DTOs/create-post";
import { postModel } from "../db/post-schema";
import mongoose from "mongoose";
export class PostRepository {
  async createPost(data: CreatePostDTO, userId) {
    return await postModel.create({
      body: data.body,
      title: data.title,
      categories: data.categories,
      user: userId,
    });
  }

  async update(data: CreatePostDTO, postId) {
    const post = await postModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(postId) },
      { ...data },
      { new: true }
    );
    return post;
  }
}
