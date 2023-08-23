import { User } from '../models';
import type { TUser } from '../models';

export const userAPI = {
  createOrUpdate: async (data: TUser) => {
    const {
      id,
      login,
      avatar,
    } = data;
    await User.upsert({
      id: id,
      login: login,
      display_name: login,
      avatar: avatar,
    });
  },
};
