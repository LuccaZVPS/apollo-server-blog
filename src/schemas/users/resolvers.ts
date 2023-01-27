import { getUser } from "../../use-cases/users/get-user";
import { createUser } from "../../use-cases/users/create-user";
import { login } from "../../use-cases/users/login";
import { logout } from "../../use-cases/users/logout";

export const userResolvers = {
  Query: {
    user: getUser,
    logout,
  },

  Mutation: {
    createUser,
    login,
  },
};
