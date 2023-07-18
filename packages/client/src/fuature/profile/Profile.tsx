import { Button } from '@components/design-system';
import { Title } from '@components/design-system/Fonts';
import styles from './Profile.module.scss';
import { useState } from 'react';

type ProfileT = {};

export const Profile: React.FC<ProfileT> = () => {
  const [mode, setMode] = useState('profile');


  return (
    <div className={styles.Wrapper}>
      <Title weight={'bold'}>Профиль</Title>
      {mode !== 'changePassword' && (
        <Button color={'blue'} onClick={() => setMode('changePassword')}>
          Сменить пароль
        </Button>
      )}
    </div>
  );
};
