import { BodyNormal } from '@components/design-system/Fonts';
import styles from './NoMatch.module.scss';

type NoMatchT = {};

export const NoMatch: React.FC<NoMatchT> = () => {
  return (
    <div className={styles.Wrapper}>
      <BodyNormal>NoMatch Component 404</BodyNormal>
    </div>
  );
};
