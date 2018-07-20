// The GraphQL schema in string form
const typeDefs = `
    type Query { dog: [Dog] }
    type Dog { name: String, kind: String }
  `;

module.exports = typeDefs;
