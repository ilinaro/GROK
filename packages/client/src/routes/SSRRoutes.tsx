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
import { Navigate, Route, Routes } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';
import { useAppDispatch } from '@store/hooks';
import { useQuery } from 'react-query';
import { authApi } from '@api/auth';
import { userActions } from '@store/slices/user/userSlice';
import { TopicPage } from '@pages/topic';

type PrivateRouteProps = {
  children: ReactElement;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const {
    data: user,
    isLoading,
    isSuccess,
  } = useQuery(['user'], () => authApi.getCurrentUser(), {
    enabled: true,
    onSuccess: (data) => {
      dispatch(userActions.setUserData(data));
    },
  });

  const previousPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const authPath = ['/login', '/registration'];
  const isExcludePath: boolean = authPath.includes(previousPath);

  if (isSuccess && isExcludePath && user) {
    return <Navigate to="/" />;
  } else if (!isSuccess && !isExcludePath && !user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

type Params = {
  layout?: boolean;
  priv?: boolean;
};

export const SSRRouters = () => {
  const privateRouter = (route: ReactElement, params: Params) => {
    const { layout = false, priv = false } = params;

    if (layout && priv) {
      return (
        <PrivateRoute>
          <ProfileLayout>{route}</ProfileLayout>
        </PrivateRoute>
      ) as ReactNode;
    } else if (layout && !priv) {
      return (<ProfileLayout>{route}</ProfileLayout>) as ReactNode;
    } else {
      return (<>{route}</>) as ReactNode;
    }
  };

  return (
    <Routes>
      <Route path={RouteNames.START} element={privateRouter(<StartPage />, { layout: true, priv: true })} />
      <Route path={RouteNames.PROFILE} element={privateRouter(<ProfilePage />, { layout: true, priv: true })} />
      <Route path={RouteNames.LEADERS} element={privateRouter(<LeadersPage />, { layout: true, priv: true })} />
      <Route path={RouteNames.FORUM} element={privateRouter(<ForumPage />, { layout: true, priv: true })} />
      <Route path={RouteNames.PROGRESS} element={privateRouter(<ProgressPage />, { layout: true, priv: true })} />
      <Route path={RouteNames.NOMATCH} element={privateRouter(<NoMatchPage />, { layout: true })} />
      <Route path={RouteNames.FORUM_TOPICS} element={privateRouter(<ForumTopics />, { layout: true, priv: true })} />
      <Route path={RouteNames.TOPIC} element={privateRouter(<TopicPage />, { layout: true, priv: true })} />
      <Route
        path={RouteNames.FORUM_CREATE}
        element={privateRouter(<ForumActionCreate />, { layout: true, priv: true })}
      />
      <Route path={RouteNames.LOGIN} element={privateRouter(<LoginPage />, {})} />
      <Route path={RouteNames.REGISTRATION} element={privateRouter(<RegistrationPage />, {})} />
      <Route path={RouteNames.GAME} element={privateRouter(<GamePage />, { priv: true })} />
      <Route path={RouteNames.ERROR} element={<ErrorPage />} />
      <Route path={RouteNames.NOMATCH} element={<NoMatchPage />} />
    </Routes>
  );
};
