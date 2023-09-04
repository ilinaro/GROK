import { authApi } from '@api/auth';
import { deleteUserAC, setUserAC } from '@store/actions/userAction';

import { useAppDispatch } from '@store/hooks';
import { useQuery } from 'react-query';

const dispatch = useAppDispatch();

export const useGetUserQuery = () => {
  return useQuery(['user'], () => authApi.getCurrentUser(), {
    enabled: false,
    onSuccess: (data) => {
      dispatch(setUserAC(data));
    },
    onError: () => dispatch(deleteUserAC()),
  });
};
