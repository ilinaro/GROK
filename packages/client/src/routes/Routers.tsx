import { ErrorPage } from '@pages/error';
import { ForumActionCreate } from '../fuature/forum/actions/create';
import { ForumAnswers } from '../fuature/forum/components/answers';
import { ForumEventsPage } from '@pages/forum/id';
import { ForumPage } from '@pages/forum';
import { ForumTopics } from '../fuature/forum/components/topics';
import { GamePage } from '@pages/game';
import { LeadersPage } from '@pages/leaders';
import { LoginPage } from '@pages/login';
import { NoMatchPage } from '@pages/nomatch/NoMatch';
import { ProfileLayout } from '@layouts/ProfileLayout';
import { ProfilePage } from '@pages/profile';
import { ProgressPage } from '@pages/progress';
import { RegistrationPage } from '@pages/registration';
import { RouteNames } from './routeNames';
import { StartPage } from '@pages/start';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '@store/hooks';
import { useGetUserQuery } from '@lib/useGetUserQuery';

type PrivateRouteProps = {
  children: ReactElement;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // const { data: user, isLoading, isError, isSuccess } = useGetUserQuery();
  const previousPath = window.location.pathname;

  const authPath = ['/login', '/registration'];

  const isExcludePath: boolean = authPath.includes(previousPath);

  // if (isSuccess && isExcludePath && !isLoading) return <Navigate to='/' />

  // return isSuccess && !isExcludePath && !isLoading ? children : <Navigate to='/login' />;
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
        path: RouteNames.FORUM_EVENTS,
        element: <ForumEventsPage />,
        // loader: eventLoader, - здесь можно добавить запрос
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
      {
        path: RouteNames.FORUM_TOPICS,
        element: <ForumTopics />,
      },
      {
        path: RouteNames.FORUM_ANSWERS,
        element: <ForumAnswers />,
      },
      {
        path: RouteNames.FORUM_CREATE,
        element: <ForumActionCreate />,
      },
    ],
  },
  {
    path: RouteNames.LOGIN,
    element: (
      <PrivateRoute>
        <LoginPage />
      </PrivateRoute>
    ),
  },
  {
    path: RouteNames.REGISTRATION,
    element: (
      <PrivateRoute>
        <RegistrationPage />
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
