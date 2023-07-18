import React, { useState } from 'react';

import { Button } from '@components/design-system';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { HidePassSVG } from '@components/design-system/SVG/HidePassSVG';
import { PASSWORD_REGEX } from 'fuature/profile/constants';
import { ShowPassSVG } from '@components/design-system/SVG/ShowPassSVG';
import { changePassword } from '@store/thunks/change-user-data';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
interface IChangePasswordForm {
  setMode(value: string): void;
}

interface IShowPass {
  [key: string]: boolean;
  oldPassword: boolean;
  newPassword: boolean;
  confirmPassword: boolean;
}

export const ChangePasswordForm: React.FC<IChangePasswordForm> = ({ setMode }) => {
  const [isPasswordShow, setIsPasswordShow] = useState<IShowPass>({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const { control, watch, handleSubmit, formState } = useForm<any>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: IShowPass) => {
    setLoading(true);
    const { old_password, new_password } = data;

    changePassword({ oldPassword: old_password, newPassword: new_password })
      .then(() => {
        setLoading(false);
        // todo редирект
        return window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const toggleShowPassword = (key: string) =>
    setIsPasswordShow((prev) => {
      const value = prev[key];

      return { ...prev, [key]: !value };
    });

  const showOrHidddenIcon = (key: string) => {
    if (!watch().old_password.length) return;

    if (isPasswordShow[key]) {
      return <HidePassSVG onClick={() => toggleShowPassword(key)} />;
    } else {
      return <ShowPassSVG onClick={() => toggleShowPassword(key)} />;
    }
  };

  const validatePasswordMatch = (value: string) => {
    const { new_password } = watch();
    return value === new_password || 'Пароли не совпадают';
  };

  return (
    <form className={styles.FormContainer}>
      <FormInput
        name="old_password"
        label="Cтарый пароль"
        type={isPasswordShow.old_password ? 'text' : 'password'}
        control={control}
        rules={{
          required: 'Это поле обязательно',
        }}
        rightAddon={showOrHidddenIcon('old_password')}
      />
      <FormInput
        name="new_password"
        label="Новый пароль"
        type={isPasswordShow.new_password ? 'text' : 'password'}
        control={control}
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: PASSWORD_REGEX,
            message: 'min 8 символов, min 1 цифра и 1 загл. буква',
          },
        }}
        rightAddon={showOrHidddenIcon('new_password')}
      />
      <FormInput
        name="confirmPassword"
        label="Повторите пароль"
        type={isPasswordShow.confirmPassword ? 'text' : 'password'}
        control={control}
        rules={{
          validate: validatePasswordMatch,
          required: 'Это поле обязательно',
        }}
        rightAddon={showOrHidddenIcon('confirmPassword')}
      />
      <Button disabled={!formState.isValid} onClick={handleSubmit(onSubmit)} loading={loading}>
        Сохранить
      </Button>
      <Button onClick={() => setMode('profile')}>Назад</Button>
    </form>
  );
};
