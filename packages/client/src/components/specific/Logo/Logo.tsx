import { Link } from 'react-router-dom';
import { Title } from '@components/design-system/Fonts';
import styles from './Logo.module.scss';

export const Logo: React.FC = () => (
  <Link to="/">
    <div className={styles.Logo}>
      <Title color={'white'} weight={'medium'}>
        GROK
      </Title>
    </div>
  </Link>
);
