import { BodyNormal } from '@components/design-system/Fonts';
import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';

type ProfileT = {};

export const Profile: React.FC<ProfileT> = () => {
  return (
    <div className={styles.Wrapper}>
      <Link to="/login">
        <Button color={'blue'}>Выйти</Button>
      </Link>
    </div>
  );
};
