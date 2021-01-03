import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { config } from 'dotenv';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers,
});

config();
server.start(() => console.log('GraphQL Server is Running'));
