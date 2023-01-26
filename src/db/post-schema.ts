import mongoose from "mongoose";

export const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    categories: [{ type: String, required: true }],
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "graphusers",
      },
    ],
  },
  { collection: "graphposts", timestamps: true }
);
export const postModel = mongoose.model("graphqlposts", postSchema);
