import axios from 'axios';
import { user } from 'config/users.config';
import { navigate } from 'react-router-dom';

export const setAvatar = async (data: any) => {
  try {
    await axios.put(user.setAvatar, data, { withCredentials: true });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

export const changePassword = async (data: any) => {
  try {
    await axios.put(user.changePassword, data, { withCredentials: true });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

export const changePassword = (data: any) => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await axios.put(user.changePassword, data, { withCredentials: true });
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
