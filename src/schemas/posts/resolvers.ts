import { createPost } from "../../use-cases/posts/create-post";
import { updatePost } from "../../use-cases/posts/update-post";

export const postsResolver = {
  Mutation: {
    createPost: createPost,
    updatePost,
  },
};
