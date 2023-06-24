import { ErrorPage } from '@pages/error';
import { ForumPage } from '@pages/forum';
import { LeadersPage } from '@pages/leaders';
import { LoginPage } from '@pages/login';
import { ProgressPage } from '@pages/progress';
import { RegistrationPage } from '@pages/registration';
import { RouteNames } from './routeNames';
import { createBrowserRouter } from 'react-router-dom';

export const Routers = createBrowserRouter([
  {
    path: RouteNames.LOGIN,
    element: <LoginPage />,
  },
  {
    path: RouteNames.REGISTRATION,
    element: <RegistrationPage />,
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
    path: RouteNames.ERROR,
    element: <ErrorPage />,
  },
]);
