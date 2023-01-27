import { gql } from "apollo-server";

export const postsType = gql`
  extend type Mutation {
    createPost(data: createPostDTO!): Post!
    updatePost(data: createPostDTO!, id: String!): Post!
    deletePost(id: String!): String
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
