import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { Button } from '@components/design-system';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { HidePassSVG } from '@components/design-system/SVG/HidePassSVG';
import { ShowPassSVG } from '@components/design-system/SVG/ShowPassSVG';
import { PASSWORD_REGEX } from 'fuature/profile/constants';
import { changePassword } from '@store/thunks/change-user-data';

interface IChangePasswordForm {
  setMode(value: string): void;
}

interface IShowPass {
  old_password: boolean;
  new_password: boolean;
  confirmPassword: boolean;
}

export const ChangePasswordForm: React.FC<IChangePasswordForm> = ({ setMode }) => {
  const [isPasswordShow, setIsPasswordShow] = useState<IShowPass>({
    old_password: false,
    new_password: false,
    confirmPassword: false,
  });
  const { control, watch, handleSubmit, formState } = useForm<any>({
    defaultValues: {
      old_password: '',
      new_password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: IShowPass) => {
    const { old_password, new_password } = data;

    changePassword({ oldPassword: old_password, newPassword: new_password });
  };

  const toggleShowPassword = (key: string) =>
    setIsPasswordShow((prev) => {
      const value = prev[key];

      console.log({ ...prev, [key]: !value });

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
      <Button onClick={handleSubmit(onSubmit)}>Сохранить</Button>
      <Button onClick={() => setMode('profile')}>Назад</Button>
    </form>
  );
};