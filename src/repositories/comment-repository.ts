import { CreateCommentDTO } from "../use-cases/comments/DTOs/create-comment";
import { commentModel } from "../db/comment-schema";
export class CommentRepository {
  async create(createCommentDTO: CreateCommentDTO, userId) {
    return await commentModel.create({
      comment: createCommentDTO.comment,
      post: createCommentDTO.postId,
      userId: userId,
    });
  }
}
