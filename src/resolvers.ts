import { RegisterParam } from './types/type';
import { register } from './resolver/register';

const resolvers = {
  Query: {
    hello: () => 'Welcome to DevPub Backend',
  },
  Mutation: {
    register: (_: any, param: RegisterParam) => register(param),
  }
};

export default resolvers;
