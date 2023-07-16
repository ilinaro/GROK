import { useMutation, useQuery, useQueryClient } from 'react-query';
import userService from '@services/user.service';
import authService from '@services/auth.service';
import { useAppDispatch } from '@store/hooks';
import { deleteUserAC, setUserAC } from '@store/actions/userAction';
import { LoginFormT } from 'fuature/login/components/LoginForm/LoginForm';

const dispatch = useAppDispatch();

export const useGetUserQuery = () => {
  return useQuery(['user'], () => userService.getUser(), {
    enabled: false,
    onSuccess: (data) => {
      dispatch(setUserAC(data));
    },
    onError: () => dispatch(deleteUserAC()),
  });
};
