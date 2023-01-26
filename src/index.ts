import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./rootTypesDefs";
import dotenv from "dotenv";
import { context } from "./middlewares/auth";
dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected!"));
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});
server.listen(8080).then(() => {
  console.log("Apollo iniciado");
});
