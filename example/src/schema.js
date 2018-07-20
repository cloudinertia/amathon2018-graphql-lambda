const fs = require("fs");
const { makeExecutableSchema, mergeSchemas } = require("graphql-tools");
const files = fs.readdirSync(__dirname);
const dirs = files.filter(file => {
  return !/.+\.js/g.test(file);
});

const schemas = [];
dirs.forEach(dir => {
  console.log(require("./" + dir + "/typeDefs"));
  const schema = makeExecutableSchema({
    typeDefs: require("./" + dir + "/typeDefs"),
    resolvers: require("./" + dir + "/resolvers")
  });
  schemas.push(schema);
});

const resultschema = mergeSchemas({ schemas });

module.exports = resultschema;
