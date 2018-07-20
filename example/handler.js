import { microGraphql, microGraphiql } from "apollo-server-micro";
import micro, { send } from "micro";
import { get, post, router } from "microrouter";
import serverless from "serverless-http";

let schema = "./src/schema";

if (process.env.NODE_ENV === "sls") {
  schema = "./src/" + process.env.NAME + "/index.js";
}

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: "/graphql" });

const server = micro(
  router(
    get("/graphql", graphqlHandler),
    post("/graphql", graphqlHandler),
    get("/graphiql", graphiqlHandler),
    (req, res) => send(res, 404, "not found")
  )
);

exports.render = serverless(server);
