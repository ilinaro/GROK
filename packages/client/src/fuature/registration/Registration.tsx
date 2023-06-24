import { BodyNormal } from '@components/design-system/Fonts';
import { PrimaryLayout } from '@layouts/PrimaryLayout';
import styles from './Registration.module.scss';

type RegistrationT = {};

export const Registration: React.FC<RegistrationT> = () => {
  return (
    <PrimaryLayout>
      <div className={styles.Wrapper}>
        <BodyNormal>Registration Component</BodyNormal>
      </div>
    </PrimaryLayout>
  );
};
