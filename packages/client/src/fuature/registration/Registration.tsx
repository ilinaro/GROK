import { BodyNormal } from '@components/design-system/Fonts';
import styles from './Registration.module.scss';

type RegistrationT = {};

export const Registration: React.FC<RegistrationT> = () => {
  return (
    <div className={styles.Wrapper}>
      <BodyNormal>Registration Component</BodyNormal>
    </div>
  );
};
