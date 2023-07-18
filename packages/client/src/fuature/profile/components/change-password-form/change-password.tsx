import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { Button } from '@components/design-system';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { HidePassSVG } from '@components/design-system/SVG/HidePassSVG';
import { ShowPassSVG } from '@components/design-system/SVG/ShowPassSVG';
import { PASSWORD_REGEX, REQUIRED } from 'fuature/profile/constants';
import { changePassword } from '@store/thunks/change-user-data';
import { IChangePasswordRequest } from '@store/types/userTypes';
import { baseValidationRules, passwordValidationScheme } from 'fuature/profile/validation';
interface IChangePasswordForm {
  setMode(value: string): void;
}

interface IShowPass {
  [key: string]: boolean;
  old_password: boolean;
  new_password: boolean;
  confirmPassword: boolean;
}

interface IChangePasswordFormData {
  old_password: string;
  new_password: string;
  confirmPassword: string;
}

export const ChangePasswordForm: React.FC<IChangePasswordForm> = ({ setMode }) => {
  const [isPasswordShow, setIsPasswordShow] = useState<IShowPass>({
    old_password: false,
    new_password: false,
    confirmPassword: false,
  });
  const { control, watch, handleSubmit, formState } = useForm<FieldValues>({
    defaultValues: {
      old_password: '',
      new_password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: FieldValues) => {
    setLoading(true);
    const { old_password, new_password } = data;

    const request: IChangePasswordRequest = { oldPassword: old_password, newPassword: new_password };

    changePassword(request)
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
        rules={baseValidationRules}
        rightAddon={showOrHidddenIcon('old_password')}
      />
      <FormInput
        name="new_password"
        label="Новый пароль"
        type={isPasswordShow.new_password ? 'text' : 'password'}
        control={control}
        rules={passwordValidationScheme}
        rightAddon={showOrHidddenIcon('new_password')}
      />
      <FormInput
        name="confirmPassword"
        label="Повторите пароль"
        type={isPasswordShow.confirmPassword ? 'text' : 'password'}
        control={control}
        rules={{
          validate: validatePasswordMatch,
          ...baseValidationRules,
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
