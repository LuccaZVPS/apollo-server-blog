import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./rootTypesDefs";
import dotenv from "dotenv";
import { userSchema } from "./db/user-schema";
dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected!"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(8000).then(() => {
  console.log("Apollo iniciado");
});
