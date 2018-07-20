var { graphqlExpress } = require("apollo-server-express");
var bodyParser = require("body-parser");
var schema = require("./index");

/*
if (process.env.NAME) {
  schema = "./src/" + process.env.NAME + "/index.js";
}
*/

var serverless = require("serverless-http");
var express = require("express");
var app = express();

app.use("/testdic/graphql", bodyParser.json(), graphqlExpress({ schema: schema }));

exports.graphql = serverless(app);
