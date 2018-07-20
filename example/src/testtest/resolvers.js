const dogs = [
  {
    name: "bbobbi",
    kind: "poodle"
  },
  {
    name: "nabi",
    kind: "Beagle"
  }
];
// The resolvers
const resolvers = {
  Query: { dogs: () => dogs }
};

module.exports = resolvers;
