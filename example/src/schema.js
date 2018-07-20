const { makeExecutableSchema, mergeSchemas } = require("graphql-tools");
const dirs = require("./getDirName.js");

const schemas = [];
dirs.forEach(dir => {
  const schema = makeExecutableSchema({
    typeDefs: require("./" + dir + "/typeDefs"),
    resolvers: require("./" + dir + "/resolvers")
  });
  schemas.push(schema);
});

const resultschema = mergeSchemas({ schemas });

module.exports = resultschema;
