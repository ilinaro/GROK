import { User } from '@store/types/userTypes';
import { UserRepository } from '@services/user.service';
import { auth } from '@config/apiRoutes.config';
import { axiosInstance } from '@api/axiosInstance';

export class ApiRepository implements UserRepository {
  async getCurrentUser(): Promise<User> {
    const { data } = await axiosInstance.get<User>(auth.user);
    return data;
  }
}
