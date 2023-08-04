import { ErrorPage } from '../../src/pages/error';
import { ForumActionCreate } from '../fuature/forum/actions/create';
import { ForumAnswers } from '../fuature/forum/components/answers';
import { ForumEventsPage } from '../../src/pages/forum/id';
import { ForumPage } from '../../src/pages/forum';
import { ForumTopics } from '../fuature/forum/components/topics';
import { GamePage } from '../../src/pages/game';
import { LeadersPage } from '../../src/pages/leaders';
import { LoginPage } from '../../src/pages/login';
import { NoMatchPage } from '../../src/pages/nomatch/NoMatch';
import { ProfileLayout } from '../../src/layouts/ProfileLayout';
import { ProfilePage } from '../../src/pages/profile';
import { ProgressPage } from '../../src/pages/progress';
import { RegistrationPage } from '../../src/pages/registration';
import { RouteNames } from './routeNames';
import { StartPage } from '../../src/pages/start';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppDispatch } from '../../src/store/hooks';
import { useQuery } from 'react-query';
import userService from '../../src/services/user.service';
import { setUserAC } from '../../src/store/actions/userAction';

type PrivateRouteProps = {
  children: ReactElement;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const {
    data: user,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(['user'], () => userService.getUser(), {
    enabled: true,
    onSuccess: (data) => {
      dispatch(setUserAC(data));
    },
  });

  const previousPath = window.location.pathname;
  const authPath = ['/login', '/registration'];
  const isExcludePath: boolean = authPath.includes(previousPath);

  if (isSuccess && isExcludePath && !isLoading) {
    return <Navigate to="/" />;
  } else if (!isSuccess && !isExcludePath && !isLoading) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
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
