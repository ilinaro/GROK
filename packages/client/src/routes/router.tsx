import { createBrowserRouter } from 'react-router-dom';
import { RouteNames } from './routeNames';
import { ErrorPage, ForumPage, LeadersPage, LoginPage, ProgressPage, RegistrationPage } from '../pages';

export const router = createBrowserRouter([
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
