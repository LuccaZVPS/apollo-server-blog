export const postsResolver = {
  Query: {
    createPost: () => {
      return {
        body: "a",
        _id: "a",
        title: "a",
        categories: ["a"],
        createdAt: new Date(),
      };
    },
  },
};
