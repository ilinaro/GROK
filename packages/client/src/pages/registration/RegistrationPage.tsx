import { PrimaryLayout } from '@layouts/PrimaryLayout';
import { Registration } from '../../fuature/registration';

type RegistrationPageT = {};

export const RegistrationPage: React.FC<RegistrationPageT> = () => (
  <PrimaryLayout>
    <Registration />
  </PrimaryLayout>
);
