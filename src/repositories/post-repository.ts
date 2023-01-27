import { CreatePostDTO } from "../use-cases/posts/DTOs/create-post";
import { postModel } from "../db/post-schema";
import mongoose, { isValidObjectId, Unpacked } from "mongoose";
import { Post } from "../domain/post";
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
    return await postModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(postId) },
      { ...data },
      { new: true }
    );
  }
  async findById(id: string): Promise<Post | undefined> {
    const isValidId = isValidObjectId(id);
    if (!isValidId) {
      return;
    }
    const post = await postModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (post) {
      return post as unknown as Post;
    }
  }
  async delete(id: string) {
    await postModel.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}
