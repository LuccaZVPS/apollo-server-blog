import { gql } from "apollo-server";
import { userResolvers } from "./schemas/users/resolvers";
import { userTypeDefs } from "./schemas/users/typeDefs";

const rooTypes = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
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
export const resolvers = [rootResolver, userResolvers];
export const typeDefs = [rooTypes, userTypeDefs];
