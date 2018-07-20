import fs from "fs";
const files = fs.readdirSync(__dirname);
const dirs = files.filter(file => {
  return !/.+\.js/g.test(file);
});

import { makeExecutableSchema, mergeSchemas } from "graphql-tools";
const schemas = [];
dirs.forEach(dir => {
  const schema = makeExecutableSchema({
    typeDefs: require("./" + dir + "/typeDefs").default,
    resolvers: require("./" + dir + "/resolvers").dafault
  });
  schemas.push(schema);
});

const resultschema = mergeSchemas({ schemas });

export default resultschema;
