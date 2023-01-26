import { gql } from "apollo-server";

export const userTypeDefs = gql`
  extend type Query {
    user: User!
  }
  extend type Mutation {
    createUser(data: CreateUserDTO!): User!
    login(data: LoginDTO!): Login!
  }
  type User {
    name: String!
    email: String!
    _id: String
  }
  input CreateUserDTO {
    name: String!
    email: String!
    password: String!
  }

  type Login {
    token: String!
  }
  input LoginDTO {
    email: String
    password: String
  }
`;
