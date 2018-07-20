const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];
// The resolvers
const resolvers = {
  Query: { books: () => books }
};

export default resolvers;
