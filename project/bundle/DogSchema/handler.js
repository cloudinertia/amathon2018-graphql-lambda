var { graphqlExpress } = require("apollo-server-express");
var bodyParser = require("body-parser");
var schema = require("./index");
var serverless = require("serverless-http");
var express = require("express");
var app = express();
const curDir = __dirname.split('/')

app.use(`/${curDir[curDir.length-1]}/graphql`, bodyParser.json(), graphqlExpress({ schema: schema }));

exports.graphql = serverless(app);
