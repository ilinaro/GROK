import { Link } from 'react-router-dom';
import { Title } from '@components/design-system/Fonts';
import styles from './Logo.module.scss';

export const Logo: React.FC = () => (
  <Link to="/">
    <div className={styles.LogoContainer}>
      <Title className={styles.Logo} color={'white1'} weight={'bold'}>
        GROK
      </Title>
    </div>
  </Link>
);
