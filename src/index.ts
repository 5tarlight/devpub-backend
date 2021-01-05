import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { config } from 'dotenv';
import Database from './Database';
import configure from './configure';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers,
});

server.express.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://' + configure().frontend);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

config();
new Database();
server.start(() => console.log('GraphQL Server is Running'));
