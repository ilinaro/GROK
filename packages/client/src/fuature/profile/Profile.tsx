import { BodyNormal, Title } from '@components/design-system/Fonts';
import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';
import { ProfileForm } from './components/profile-form/profile-form';
import { ReactNode, useState } from 'react';
import { ChangePasswordForm } from './components/change-password-form';
import { logout } from '@store/thunks/user';

export const Profile: React.FC = () => {
  const [mode, setMode] = useState('profile');

  const modes: Record<string, ReactNode> = {
    profile: <ProfileForm />,
    changePassword: <ChangePasswordForm setMode={setMode} />,
  };

  return (
    <div className={styles.Wrapper}>
      <Title weight={'bold'}>Профиль</Title>
      <div className={styles.container}>
        {modes[mode]}
        {mode !== 'changePassword' && (
          <Button
            style={{
              backgroundColor: 'var(--color-button-changePass',
              borderColor: 'var(--color-button-changePass',
            }}
            fullWidth={true}
            onClick={() => setMode('changePassword')}
          >
            Сменить пароль
          </Button>
        )}
      </div>
    </div>
  );
};
