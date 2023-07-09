import { setUserAC, setUserAuthAC, setUserErrorAC, setUserLoadingAC } from '@store/actions/userAction';
import { AppDispatch } from '@store/types';
import { User } from '@store/types/userTypes';
import axios from 'axios';
import { auth } from 'config/apiRoutes.config';
import { user } from 'config/users.config';

export const getUser = async () => await axios.get<User>(auth.user, { withCredentials: true });

export const setAvatar = (data: any) => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await axios.put(user.setAvatar, data, { withCredentials: true });
    if (response.status === 200) {
      dispatch(setUserAuthAC());
      const { data } = await getUser();

      dispatch(setUserAC(data));
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserErrorAC(error.message));
    }
  } finally {
    dispatch(setUserLoadingAC(false));
  }
};
