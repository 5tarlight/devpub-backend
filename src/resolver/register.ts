import { RegisterParam, User, UserRes } from '../types/type';
import axios from 'axios'
import config from '../configure';
import { User as DBUser } from '../Database';

export const register = async (
  { email, displayedName, password }: RegisterParam
): Promise<User | null> => {
  const registerRes = await axios.post(`http://${config().server}/auth/register`, {
    email: email,
    displayedName: displayedName,
    password: password,
  })

  if (registerRes.status !== 201) {
    throw new Error('return code is not 201');
  }

  const userRes = await axios.get(`http://${config().server}/auth/emailprofile?email=${email}`);

  if (userRes.status === 404) {
    throw new Error('user is not found')
  }

  const res = userRes as UserRes;
  const id = res.data.id;
  const name = res.data.displayedName;
  const mail = res.data.email;

  await DBUser.create({
    id: id
  })

  return {
    id,
    displayedName: name,
    email: mail,
  };
}
