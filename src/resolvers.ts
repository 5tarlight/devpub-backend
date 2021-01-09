import { LoginParam, RegisterParam } from './types/type';
import { register } from './resolver/register';
import { login } from './resolver/login';

const resolvers = {
  Query: {
    hello: () => 'Welcome to DevPub Backend',
    login: (_: any, param: LoginParam) => login(param),
  },
  Mutation: {
    register: (_: any, param: RegisterParam) => register(param),
  }
};

export default resolvers;
