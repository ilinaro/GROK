import { BodyNormal } from '@components/design-system/Fonts';
import styles from './Error.module.scss';

type ErrorT = {};

export const Error: React.FC<ErrorT> = () => {
  return (
    <div className={styles.Wrapper}>
      <BodyNormal>Error Component</BodyNormal>
    </div>
  );
};
