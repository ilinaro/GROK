import { ErrorPage } from '../pages/error';
import { ForumActionCreate } from '../fuature/forum/actions/create';
import { ForumAnswers } from '../fuature/forum/components/answers';
import { ForumEventsPage } from '../pages/forum/id';
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
import { Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppDispatch } from '../store/hooks';
import { useQuery } from 'react-query';
import userService from '../services/user.service';
import { setUserAC } from '../store/actions/userAction';

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

  const previousPath = typeof window !== 'undefined' ? window.location.pathname : '';
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

export const SSRRouters = () => {
  const privatRouter = (route: ReactElement, layout = false) => {
    return layout ? (
      // <PrivateRoute>
      <ProfileLayout>{route}</ProfileLayout>
    ) : (
      // </PrivateRoute>
      // <PrivateRoute>
      <>{route}</>
    );
    // </PrivateRoute>
  };

  return (
    <Routes>
      <Route path={RouteNames.START} element={privatRouter(<StartPage />, true)} />
      <Route path={RouteNames.PROFILE} element={privatRouter(<ProfilePage />, true)} />
      <Route path={RouteNames.LEADERS} element={privatRouter(<LeadersPage />, true)} />
      <Route path={RouteNames.FORUM} element={privatRouter(<ForumPage />, true)} />
      <Route path={RouteNames.FORUM_EVENTS} element={privatRouter(<ForumEventsPage />, true)} />
      <Route path={RouteNames.PROGRESS} element={privatRouter(<ProgressPage />, true)} />
      <Route path={RouteNames.NOMATCH} element={privatRouter(<NoMatchPage />, true)} />
      <Route path={RouteNames.FORUM_TOPICS} element={privatRouter(<ForumTopics />, true)} />
      <Route path={RouteNames.FORUM_ANSWERS} element={privatRouter(<ForumAnswers />, true)} />
      <Route path={RouteNames.FORUM_CREATE} element={privatRouter(<ForumActionCreate />, true)} />
      {/* </Route > */}
      <Route path={RouteNames.LOGIN} element={privatRouter(<LoginPage />)} />
      <Route path={RouteNames.REGISTRATION} element={privatRouter(<RegistrationPage />)} />
      <Route path={RouteNames.GAME} element={privatRouter(<GamePage />)} />
      <Route path={RouteNames.ERROR} element={<ErrorPage />} />
      <Route path={RouteNames.NOMATCH} element={<NoMatchPage />} />
    </Routes>
  );
};
