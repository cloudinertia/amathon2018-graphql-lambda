// import { microGraphql, microGraphiql } from "apollo-server-micro";
// import micro, { send } from "micro";
// import { get, post, router } from "microrouter";

// const graphqlHandler = microGraphql({ schema });
// const graphiqlHandler = microGraphiql({ endpointURL: "/graphql" });

// const server = micro(
//   router(
//     get("/graphql", graphqlHandler),
//     post("/graphql", graphqlHandler),
//     get("/graphiql", graphiqlHandler),
//     (req, res) => send(res, 404, "not found")
//   )
// );

// server.listen(3000, () => {
//   console.log("server is on");
// });

import "babel-polyfill";
import { graphqlLambda, graphiqlLambda } from "apollo-server-lambda";
import lambdaPlayground from "graphql-playground-middleware-lambda";

let schema = "./src/schema";

if (process.env.NODE_ENV === "sls") {
  schema = "./src/" + process.env.NAME + "/index.js";
}

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  function callbackFilter(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers["Access-Control-Allow-Origin"] = "*";
    callback(error, output);
  }

  const handler = graphqlLambda({ schema: schema, tracing: true });
  return handler(event, context, callbackFilter);
};
