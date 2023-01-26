import { getUser } from "../../use-cases/users/get-user";
import { createUser } from "../../use-cases/users/create-user";

export const userResolvers = {
  Query: {
    user: getUser,
  },

  Mutation: {
    createUser,
  },
};
