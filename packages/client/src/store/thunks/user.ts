import { setUserLoadingAC, clearUserErrorsAC } from '@store/actions/userAction';
import { AppDispatch } from '@store/types';
import { User } from '@store/types/userTypes';
import { auth } from '@config/apiRoutes.config';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '@services/user.service';
import { userActions } from '@store/slices/user/userSlice';

export const loadUser = createAsyncThunk<User>(auth.user, async (_, thunkApi) => {
  try {
    const service: UserService = thunkApi.extra as UserService;

    const { data } = await service.getCurrentUser();

    thunkApi.dispatch(userActions.setUserData(data));

    return data;
  } catch (error) {
    console.error('Вы не авторизованы');
    return thunkApi.rejectWithValue(undefined);
  }
});

// Thunk для очистки ошибок
export const clearUserErrors = () => (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  dispatch(clearUserErrorsAC());
  dispatch(setUserLoadingAC(false));
};
