import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "graphusers" }
);
export const userModel = mongoose.model("graphqlusers", userSchema);
