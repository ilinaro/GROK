import { BodyNormal } from '@components/design-system/Fonts';
import styles from './Leader.module.scss';

type LeaderT = {};

export const Leader: React.FC<LeaderT> = () => {
  return (
    <div className={styles.Wrapper}>
      <BodyNormal>Leader Component</BodyNormal>
    </div>
  );
};
