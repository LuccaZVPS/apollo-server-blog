import { AuthenticationError, UserInputError } from "apollo-server";
import { PostRepository } from "../../repositories/post-repository";
const postRepository = new PostRepository();
export const deletePost = async (_, { id }, { userId }) => {
  if (!userId) {
    throw new AuthenticationError("Must be logged in to delete a post");
  }
  const postExist = await postRepository.findById(id);
  if (!postExist) {
    throw new UserInputError("Post do not exist");
  }
  if (postExist.user != userId) {
    throw new AuthenticationError("cant delete this post");
  }
  await postRepository.delete(id);
  return "Post deleted";
};
