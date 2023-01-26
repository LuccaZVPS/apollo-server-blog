import { getUser } from "../../use-cases/users/get-user";
import { createUser } from "../../use-cases/users/create-user";
import { login } from "../../use-cases/users/login";

export const userResolvers = {
  Query: {
    user: getUser,
  },

  Mutation: {
    createUser,
    login,
  },
};
