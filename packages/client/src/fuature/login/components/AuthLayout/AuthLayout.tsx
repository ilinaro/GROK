import { UnionSVG } from '@components/design-system/SVG/UnionSVG';
import { Logo } from '../../../../components/specific/Logo';
import styles from './AuthLayout.module.scss';
import { EllipseSVG } from '@components/design-system/SVG/EllipseSVG';

type AuthFormT = {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<AuthFormT> = ({ children }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.backgroundItem}>
        <Logo />
      </div>
      <div className={styles.backgroundItem}>
        <UnionSVG />
      </div>
      {children}
      <div className={styles.backgroundItem}>
        <EllipseSVG />
      </div>
    </div>
  );
};
