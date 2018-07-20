// The GraphQL schema in string form
const typeDefs = `
    type Query { books1: [Book] }
    type Book { title: String, author: String }
  `;

export default typeDefs;
