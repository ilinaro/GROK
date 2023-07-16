import authService from '@services/auth.service';
import { LoginFormT } from 'fuature/login/components/LoginForm/LoginForm';
import { useMutation } from 'react-query';

export const useSignInQuery = () => {
  return useMutation(
    async (data: LoginFormT) => {
      await authService.signin(data);
    },
    {
      onSuccess: () => {
        // useGetUserQuery.refetchQueries(['user']);
      },
    }
  );
};
