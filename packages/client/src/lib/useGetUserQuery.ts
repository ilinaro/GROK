import { useMutation, useQuery, useQueryClient } from 'react-query';
import userService from '@services/user.service';
import authService from '@services/auth.service';
import { useAppDispatch } from '@store/hooks';
import { setUserAC } from '@store/actions/userAction';
import { LoginFormT } from 'fuature/login/components/LoginForm/LoginForm';

const dispatch = useAppDispatch();
const queryClient = useQueryClient();

export const useGetUserQuery = () => {
  return useQuery(['user'], () => userService.getUser(), {
    enabled: true,
    onSuccess: (data) => {
      dispatch(setUserAC(data));
    },
  });
};

export const useSignInQuery = () => {
  return useMutation(
    async (data: LoginFormT) => {
      await authService.signin(data);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );
};
