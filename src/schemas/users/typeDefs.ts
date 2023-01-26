import { gql } from "apollo-server";

export const userTypeDefs = gql`
  extend type Query {
    user(id: String!): User!
  }
  extend type Mutation {
    createUser(data: CreateUserDTO!): User!
  }
  type User {
    name: String
    email: String
  }
  input CreateUserDTO {
    name: String!
    email: String!
    password: String!
  }
`;
