import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { Title } from '@components/design-system/Fonts';
import { Button } from '@components/design-system';
import styles from './Profile.module.scss';
import { ProfileForm } from './components/profile-form/profile-form';
import { ReactNode, useState } from 'react';
import { ChangePasswordForm } from './components/change-password-form';
import { authApi } from '@api/auth';
import { RouteNames } from '@routes/routeNames';
import { AxiosError } from 'axios';

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState('profile');

  const modes: Record<string, ReactNode> = {
    profile: <ProfileForm />,
    changePassword: <ChangePasswordForm setMode={setMode} />,
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation<string, AxiosError<{ reason: string }>>(
    async () => {
      const { data } = await authApi.logout();
      return data;
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
        navigate(RouteNames.LOGIN);
      },
    }
  );

  return (
    <div className={styles.Wrapper}>
      <Title weight={'bold'}>Профиль</Title>
      {modes[mode]}
      {mode !== 'changePassword' && (
        <Button color={'blue'} onClick={() => setMode('changePassword')}>
          Сменить пароль
        </Button>
      )}
      <Button color={'pink'} onClick={() => mutate()}>
        Выйти
      </Button>
    </div>
  );
};
