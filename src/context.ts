import { ExpressContext } from "apollo-server-express";
import { ResponsePath } from "graphql";
import { auth } from "./middlewares/auth";

export const context = async ({ req, res }) => {
  const userId = await auth(req);

  return {
    userId,
    express: { res },
  };
};
export interface context {
  userId: undefined | string;
  express: ExpressContext;
}
