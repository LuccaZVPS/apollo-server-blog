import { gql } from "apollo-server";

export const commentsTypeDefs = gql`
  extend type Mutation {
    createComment(data: CreateComment!): Comment!
  }

  type Comment {
    comment: String!
    postId: String!
    userId: String!
    createdAt: String!
  }
  input CreateComment {
    comment: String!
    postId: String!
  }
`;
