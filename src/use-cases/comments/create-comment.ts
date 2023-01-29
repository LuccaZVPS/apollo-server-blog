import { CommentRepository } from "../../repositories/comment-repository";
import { AuthenticationError, UserInputError } from "apollo-server";
import { validate } from "class-validator";
import { CreateCommentDTO } from "./DTOs/create-comment";
const commentRepository = new CommentRepository();
export const createComment = async (_, { data }, { userId }) => {
  if (!userId) {
    throw new AuthenticationError("Must be logged in");
  }
  const createCommentDTO = new CreateCommentDTO();
  createCommentDTO.comment = data?.comment;
  createCommentDTO.postId = data?.postId;
  const isValid = await validate(createCommentDTO);
  if (isValid.length > 0) {
    throw new UserInputError(
      isValid
        .map((error) => {
          return JSON.stringify(error.constraints);
        })
        .toString()
    );
  }
  const comment = await commentRepository.create(createCommentDTO, userId);
  return {
    comment: comment.comment,
    postId: comment.post,
    createdAt: comment.createdAt,
    userId: comment.userId,
  };
};
