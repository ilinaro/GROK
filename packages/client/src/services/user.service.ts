import { User } from '@store/types/userTypes';
import httpService from './http.service';

const getUser = async () => {
  try {
    const { data } = await httpService.get<User>(`auth/user`);
    return data;
  } catch {
    throw new Error('userServiceGetError');
  }
};

const userService = {
  getUser,
};

export default userService;
