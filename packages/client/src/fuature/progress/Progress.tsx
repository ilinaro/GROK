import { BodyNormal } from '@components/design-system/Fonts';
import styles from './Progress.module.scss';

type ProgressT = {};

export const Progress: React.FC<ProgressT> = () => {
  return (
    <div className={styles.Wrapper}>
      <BodyNormal>Progress Component</BodyNormal>
    </div>
  );
};
