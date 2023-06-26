import { AuthLayout } from 'fuature/login/components/AuthLayout';
import { LoginForm } from './components/LoginForm/LoginForm';

type LoginT = {};

export const Login: React.FC<LoginT> = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
