import { LoginParam, LoginRes, User } from '../types/type';
import axios from 'axios';
import config from '../configure';

export const login = async ({ email, password }: LoginParam): Promise<LoginRes> => {
  const validateRes = await axios.post(`http://${config().server}/auth/validateuser`, {
    email: email,
    password: password,
  });

  const success = Boolean(validateRes.data);

  let user: User = {
    id: '',
    email: '',
    displayedName: '',
  };

  if (success) {
    const userRes = await axios.get(`http://${config().server}/auth/emailprofile?email=${email}`);
    user.email = String(userRes.data.email);
    user.id = String(userRes.data.id);
    user.displayedName = String(userRes.data.displayedName);
  }

  return {
    success,
    user
  }
}
