import { createPost } from "../../use-cases/posts/create-post";
import { updatePost } from "../../use-cases/posts/update-post";
import { deletePost } from "../../use-cases/posts/delete-post";

export const postsResolver = {
  Mutation: {
    createPost: createPost,
    updatePost,
    deletePost,
  },
};
