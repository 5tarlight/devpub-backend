import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { config } from 'dotenv';
import Database from './Database';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers,
});

config();
new Database();
server.start(() => console.log('GraphQL Server is Running'));
