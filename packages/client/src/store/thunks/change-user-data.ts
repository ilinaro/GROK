import { IChangePasswordRequest, User } from '@store/types/userTypes';
import axios from 'axios';
import { user } from '@config/apiRoutes.config';
import { IUpdateUser } from '@fuature/profile/components/profile-form/profile-form';

export const setAvatar = async (data: FormData) => {
  try {
    await axios.put(user.setAvatar, data, { withCredentials: true });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

export const changePassword = async (data: IChangePasswordRequest) => {
  try {
    await axios.put(user.changePassword, data, { withCredentials: true });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

export const updateUserData = async (data: IUpdateUser) => {
  try {
    await axios.put(user.profile, data, { withCredentials: true });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};
