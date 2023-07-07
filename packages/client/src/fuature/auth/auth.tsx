import { Routers } from '@routes/Routers';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { checkAuth } from '@store/thunks/user';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

export const Auth = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return <RouterProvider router={Routers(auth)} />;
};
