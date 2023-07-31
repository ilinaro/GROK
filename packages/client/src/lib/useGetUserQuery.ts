import { deleteUserAC, setUserAC } from '@store/actions/userAction';

import { useAppDispatch } from '@store/hooks';
import { useQuery } from 'react-query';
import userService from '@services/user.service';

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
