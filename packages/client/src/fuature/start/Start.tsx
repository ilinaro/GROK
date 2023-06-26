import { Ball } from '@components/specific/Ball';
import { Link } from 'react-router-dom';
import { Title } from '@components/design-system/Fonts';
import styles from './Start.module.scss';

type StartT = {};

export const Start: React.FC<StartT> = () => {
  return (
    <Link to="/game">
      <div className={styles.Start}>
        <Ball />
        <Title>НАЧАТЬ ИГРУ</Title>
      </div>
    </Link>
  );
};
