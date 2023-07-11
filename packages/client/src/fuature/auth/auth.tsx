import { useAppDispatch } from '@store/hooks';
import { checkAuth } from '@store/thunks/user';
import { ReactElement, useEffect } from 'react';

export const Auth: React.FC<{ children: ReactElement }> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return children;
};
