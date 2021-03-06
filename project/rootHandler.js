var { graphqlExpress } = require("apollo-server-express");
var bodyParser = require("body-parser");
var schema = require("./bundle/RootSchema");

var serverless = require("serverless-http");
var express = require("express");
var app = express();

app.use("/root/graphql", bodyParser.json(), graphqlExpress({ schema: schema }));

exports.graphql = serverless(app);
