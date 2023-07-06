import { BodyNormal } from '@components/design-system/Fonts';
import styles from './Forum.module.scss';

type ForumT = {};

export const Forum: React.FC<ForumT> = () => {
  return (
    <div className={styles.Wrapper}>
      <BodyNormal>Forum Component</BodyNormal>
    </div>
  );
};
