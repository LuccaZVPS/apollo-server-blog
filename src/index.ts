import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./rootTypesDefs";
import dotenv from "dotenv";
import { context } from "./context";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected!"));
const server = new ApolloServer({
  cors: {
    origin: "*",
    credentials: true,
  },
  typeDefs,
  resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server.listen(8080).then(() => {
  console.log("Apollo iniciado");
});
