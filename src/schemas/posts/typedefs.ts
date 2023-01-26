import { gql } from "apollo-server";

export const postsType = gql`
  extend type Query {
    createPost(data: createPostDTO): Post!
  }

  type Post {
    _id: String!
    user: User
    title: String!
    categories: [String!]!
    body: String!
    createdAt: String
  }
  input createPostDTO {
    title: String!
    categories: [String!]!
    body: String!
  }
`;
