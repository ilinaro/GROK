import { Login } from '../../fuature/login';
import { PrimaryLayout } from '@layouts/PrimaryLayout';

type LoginPageT = {};

export const LoginPage: React.FC<LoginPageT> = () => (
  <PrimaryLayout>
    <Login />
  </PrimaryLayout>
);
