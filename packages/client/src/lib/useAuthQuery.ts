import authService from '@services/auth.service';
import { AxiosError } from 'axios';
import { LoginFormT } from 'fuature/login/components/LoginForm/LoginForm';
import { RegistrationFormT } from 'fuature/registration/components/RegistrationForm/RegistrationForm';
import { useMutation, useQueryClient } from 'react-query';

const queryClient = useQueryClient();

export const useSignInQuery = () => {
  return useMutation<void, AxiosError, LoginFormT>(
    async (data) => {
      await authService.signin(data);
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
      await authService.signup(data);
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
      await authService.logout();
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );
};
