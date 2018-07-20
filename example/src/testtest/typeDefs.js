// The GraphQL schema in string form
const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
  `;

module.exports = typeDefs;
