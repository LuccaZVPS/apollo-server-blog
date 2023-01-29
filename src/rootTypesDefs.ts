import { gql } from "apollo-server";
import { commentsResolvers } from "./schemas/comments/resolvers";
import { commentsTypeDefs } from "./schemas/comments/typeDefs";
import { postsResolver } from "./schemas/posts/resolvers";
import { postsType } from "./schemas/posts/typedefs";
import { userResolvers } from "./schemas/users/resolvers";
import { userTypeDefs } from "./schemas/users/typeDefs";
const rooTypes = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }
  type Subscription {
    _empty: Boolean
  }
`;
const rootResolver = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};
export const resolvers = [
  rootResolver,
  userResolvers,
  postsResolver,
  commentsResolvers,
];
export const typeDefs = [rooTypes, userTypeDefs, postsType, commentsTypeDefs];
