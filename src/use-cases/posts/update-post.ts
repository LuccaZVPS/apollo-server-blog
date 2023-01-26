import { AuthenticationError, UserInputError } from "apollo-server";
import { validate } from "class-validator";
import { CreatePostDTO } from "./DTOs/create-post";
import { PostRepository } from "../../repositories/post-repository";
const postRepository = new PostRepository();
export const updatePost = async (_, { data, id }, { userId }) => {
  if (!userId) {
    throw new AuthenticationError("Should be logged");
  }
  const postInfoDTO = new CreatePostDTO();
  postInfoDTO.body = data.body;
  postInfoDTO.title = data.title;
  postInfoDTO.categories = data.categories;
  const isValid = await validate(postInfoDTO);
  if (isValid.length > 0) {
    throw new UserInputError(
      isValid
        .map((errors) => {
          return JSON.stringify(errors.constraints);
        })
        .toString()
    );
  }

  const user = await postRepository.update(postInfoDTO, id);
  const { createdAt, body, title, categories, _id } = user;
  return { createdAt, body, title, categories, _id };
};
