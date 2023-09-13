import { ErrorPage } from '../pages/error';
import { ForumActionCreate } from '../fuature/forum/actions/create';
import { ForumPage } from '../pages/forum';
import { ForumTopics } from '../fuature/forum/components/topics';
import { GamePage } from '../pages/game';
import { LeadersPage } from '../pages/leaders';
import { LoginPage } from '../pages/login';
import { NoMatchPage } from '../pages/nomatch/NoMatch';
import { ProfileLayout } from '../layouts/ProfileLayout';
import { ProfilePage } from '../pages/profile';
import { ProgressPage } from '../pages/progress';
import { RegistrationPage } from '../pages/registration';
import { RouteNames } from './routeNames';
import { StartPage } from '../pages/start';
import { ReactElement } from 'react';
import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import { OAuth } from 'fuature/login/components/OAuth/OAuth';
import { ToggleTheme } from '@components/specific/Toggle';
import { isServerSide } from '@lib/isServerSide';
import { userActions } from '@store/slices/user/userSlice';
import { useAppDispatch } from '@store/hooks';
import { useQuery } from 'react-query';
import { authApi } from '@api/auth';

type PrivateRouteProps = {
  children: ReactElement;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { search } = useLocation();
  const authCode = search.slice(6);

  const dispatch = useAppDispatch();

  const {
    data: user,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(['user'], () => authApi.getCurrentUser(), {
    enabled: !authCode,
    onSuccess: (data) => {
      dispatch(userActions.setUserData(data));
    },
  });

  if (authCode) return <OAuth code={authCode} />;

  const previousPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const authPath = [RouteNames.LOGIN, RouteNames.REGISTRATION];
  const isExcludePath: boolean = authPath.includes(previousPath as RouteNames);

  if (isSuccess && isExcludePath && !isLoading) {
    return <Navigate to="/" />;
  } else if (!isSuccess && !isExcludePath && !isLoading) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const Routers = createBrowserRouter([
  {
    path: RouteNames.START,
    element: (
      <PrivateRoute>
        <ProfileLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <StartPage />,
      },
      {
        path: RouteNames.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: RouteNames.LEADERS,
        element: <LeadersPage />,
      },
      {
        path: RouteNames.FORUM,
        element: <ForumPage />,
      },
      {
        path: RouteNames.PROGRESS,
        element: <ProgressPage />,
      },
      {
        path: RouteNames.NOMATCH,
        element: <NoMatchPage />,
      },
      {
        path: RouteNames.ERROR,
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: RouteNames.LOGIN,
    element: (
      <PrivateRoute>
        <>
          {!isServerSide && <ToggleTheme />}
          <LoginPage />
        </>
      </PrivateRoute>
    ),
  },
  {
    path: RouteNames.REGISTRATION,
    element: (
      <PrivateRoute>
        <>
          {!isServerSide && <ToggleTheme />}
          <RegistrationPage />
        </>
      </PrivateRoute>
    ),
  },
  {
    path: RouteNames.GAME,
    element: (
      <PrivateRoute>
        <GamePage />
      </PrivateRoute>
    ),
  },
  {
    path: RouteNames.ERROR,
    element: <ErrorPage />,
  },
  {
    path: RouteNames.NOMATCH,
    element: <NoMatchPage />,
  },
]);
