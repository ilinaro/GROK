import { AuthLayout } from 'fuature/login/components/AuthLayout';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';

export const Registration: React.FC = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};
