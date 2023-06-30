import { AuthLayout } from 'fuature/login/components/AuthLayout';
import { RegistrationForm } from './components';
import styles from './Registration.module.scss';

export const Registration: React.FC = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};
