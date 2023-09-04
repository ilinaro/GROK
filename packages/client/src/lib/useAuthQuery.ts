import { authApi } from '@api/auth';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { LoginFormT } from '@fuature/login/components/LoginForm/LoginForm';
import { RegistrationFormT } from '@fuature/registration/components/RegistrationForm/RegistrationForm';

const queryClient = useQueryClient();

export const useSignInQuery = () => {
  return useMutation<void, AxiosError, LoginFormT>(
    async (data) => {
      await authApi.login(data);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );
};

export const useSignUpQuery = () => {
  return useMutation<void, AxiosError, RegistrationFormT>(
    async (data) => {
      await authApi.signup(data);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );
};

export const useLogoutQuery = () => {
  return useMutation<void, AxiosError>(
    async () => {
      await authApi.logout();
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );
};
