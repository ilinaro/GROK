import { ErrorPage } from '../pages/error';
import { ForumPage } from '../pages/forum';
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
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';
import { TopicPage } from '@pages/topic';
import { User } from '@store/types/userTypes';

type IProtectedRoute = {
  user: User | null;
} & PropsWithChildren;

const ProtectedRoute: React.FC<IProtectedRoute> = ({ user, children }) => {
  if (!user) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return children ? <>{children}</> : <Outlet />;
};

type Params = {
  layout?: boolean;
  priv?: boolean;
};

interface ISSRRouters {
  user: User | null;
}

export const SSRRouters: React.FC<ISSRRouters> = ({ user }) => {
  return (
    <Routes>
      <Route
        path={RouteNames.START}
        element={
          <ProfileLayout>
            <StartPage />
          </ProfileLayout>
        }
      />
      <Route element={<ProtectedRoute user={user} />}>
        <Route
          path={RouteNames.PROFILE}
          element={
            <ProfileLayout>
              <ProfilePage />
            </ProfileLayout>
          }
        />
        <Route
          path={RouteNames.LEADERS}
          element={
            <ProfileLayout>
              <LeadersPage />
            </ProfileLayout>
          }
        />
        <Route
          path={RouteNames.PROGRESS}
          element={
            <ProfileLayout>
              <ProgressPage />
            </ProfileLayout>
          }
        />
        <Route
          path={RouteNames.FORUM}
          element={
            <ProfileLayout>
              <ForumPage />
            </ProfileLayout>
          }
        />
        <Route
          path={RouteNames.TOPIC}
          element={
            <ProfileLayout>
              <TopicPage />
            </ProfileLayout>
          }
        />
        <Route path={RouteNames.GAME} element={<GamePage />} />
      </Route>
      <Route path={RouteNames.LOGIN} element={<LoginPage />} />
      <Route path={RouteNames.REGISTRATION} element={<RegistrationPage />} />
      <Route path={RouteNames.ERROR} element={<ErrorPage />} />
      <Route path={RouteNames.NOMATCH} element={<NoMatchPage />} />
    </Routes>
  );
};
