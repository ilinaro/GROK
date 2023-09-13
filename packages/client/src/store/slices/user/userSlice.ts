import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadUser } from '@store/thunks/user';
import { User, UserState } from '@store/types/userTypes';

const initialState: UserState = {
  user: null,
  auth: false,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.auth = true;
    },
    logout: (state) => {
      state.auth = false;
      state.user = null;
    },
    setLoginAndLogoutError: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.error = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.auth = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.user = null;
      state.loading = false;
      state.auth = false;
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
