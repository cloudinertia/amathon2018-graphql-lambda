const { makeExecutableSchema, mergeSchemas } = require("graphql-tools");
const dirs = getDirName(); 

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

function getDirName() {
    const fs = require("fs");
    const files = fs.readdirSync(__dirname);
    const dirs = files.filter(file => {
      return !/.+\.js/g.test(file);
    });
    return dirs
}
