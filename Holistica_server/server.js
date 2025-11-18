import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typedefs.js";
import { resolvers } from "./schema/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log("🚀 GraphQL ready at:", url);
};

startServer();
