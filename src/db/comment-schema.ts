import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "graphqlusers",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "graphqlposts",
    },
  },
  { collection: "graphqlcomments", timestamps: true }
);
export const commentModel = mongoose.model("graphqlcomments", commentSchema);
