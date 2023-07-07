import { ErrorPage } from '@pages/error';
import { ForumEventsPage } from '@pages/forum/id';
import { ForumPage } from '@pages/forum';
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
import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import { ComponentType, ElementType, FC, ReactElement } from 'react';

type PrivateRouteProps = {
  auth: boolean;
  element: ReactElement;
  pathTo: string;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ auth, element: Element, pathTo }) => {
  const location = useLocation();

  if (auth) {
    return Element;
  } else {
    return <Navigate to={pathTo} state={{ from: location }} replace />;
  }
};

export const Routers = (auth: boolean) =>
  createBrowserRouter([
    {
      path: RouteNames.START,
      element: <PrivateRoute element={<ProfileLayout />} auth={auth} pathTo={'/login'} />,
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
      ],
    },
    {
      path: RouteNames.LOGIN,
      element: <PrivateRoute element={<LoginPage />} auth={!auth} pathTo={'/'} />,
    },
    {
      path: RouteNames.REGISTRATION,
      element: <PrivateRoute element={<RegistrationPage />} auth={!auth} pathTo={'/'} />,
    },
    {
      path: RouteNames.GAME,
      element: <PrivateRoute element={<GamePage />} auth={auth} pathTo={'/login'} />,
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
