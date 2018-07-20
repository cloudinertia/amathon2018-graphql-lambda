// const server = require("apollo-server-lambda");
var { graphqlExpress } = require("apollo-server-express");
var bodyParser = require("body-parser");
var schema = require("./src/schema");

// if (process.env.NODE_ENV === "sls") {
//   schema = "./src/" + process.env.NAME + "/index.js";
// }

// // const app = express();

// // // bodyParser is needed just for POST.
// // app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// exports.graphql = server.graphqlLambda((event, context) => {
//   const headers = event.headers;
//   const functionName = context.functionName;

//   return {
//     schema: schema,
//     context: {
//       headers,
//       functionName,
//       event,
//       context
//     }
//   };
// });

var serverless = require("serverless-http");
var express = require("express");
var app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema: schema }));

exports.graphql = serverless(app);
