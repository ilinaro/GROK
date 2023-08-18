import { authApi } from '@api/auth';
import { UserService } from '@services/user.service';
import { deleteUserAC, setUserAC } from '@store/actions/userAction';

import { useAppDispatch } from '@store/hooks';
import { useQuery } from 'react-query';
import { ApiRepository } from 'repository/ApiRepository';

const dispatch = useAppDispatch();

export const useGetUserQuery = () => {
  return useQuery(['user'], async () => await authApi.getCurrentUser(), {
    enabled: false,
    onSuccess: ({ data }) => {
      dispatch(setUserAC(data));
    },
    onError: () => dispatch(deleteUserAC()),
  });
};
