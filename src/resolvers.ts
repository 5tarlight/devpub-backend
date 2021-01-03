const resolvers = {
  Query: {
    hello: () => 'Welcome to DevPub Backend',
  },
  Mutation: {
    register: (_: any, {}: any) => ''
  }
};

export default resolvers;
