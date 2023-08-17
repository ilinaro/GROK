import { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { AuthForm } from '../AuthForm';
import { AxiosError } from 'axios';
import { BodyNormal } from '@components/design-system/Fonts';
import { Button } from '@components/design-system';
import { FormError } from '@components/specific/FormError';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { HidePassSVG } from '@components/design-system/SVG/HidePassSVG';
import { Link } from 'react-router-dom';
import { REQUIRED } from 'fuature/profile/constants';
import { RouteNames } from '@routes/routeNames';
import { ShowPassSVG } from '@components/design-system/SVG/ShowPassSVG';
import authService from '@services/auth.service';
import { baseValidationRules } from '../../../../fuature/profile/validation';
import styles from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';

type LoginT = {};

export interface LoginFormT {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export const LoginForm: React.FC<LoginT> = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation<void, AxiosError<{ reason: string }>, LoginFormT>(
    async (data: LoginFormT) => {
      await authService.signin(data);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormT>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const password = useRef({});
  password.current = watch('password', '');

  const toggleShowPassword = () => setIsPasswordShow((prev) => !prev);

  const showOrHidenIcon = () => {
    if (!watch().password.length) return;

    if (isPasswordShow) {
      return <HidePassSVG onClick={toggleShowPassword} />;
    } else {
      return <ShowPassSVG onClick={toggleShowPassword} />;
    }
  };

  const onSubmit = (data: LoginFormT) => {
    mutate(data);
  };

  const footer = () => {
    return (
      <BodyNormal weight={'normal'}>
        Нет аккаунта? <Link to={RouteNames.REGISTRATION}>Зарегистрироваться</Link>
      </BodyNormal>
    );
  };

  return (
    <AuthForm title="Вход" onSubmit={handleSubmit(onSubmit)} footer={footer()} className={styles.containerLogin}>
      {!!isError && <FormError view={'error'} description={error.response?.data.reason ?? ''} />}
      <FormInput
        name="login"
        label="Введите логин"
        //@ts-ignore
        control={control}
        rules={baseValidationRules}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="password"
        label="Введите пароль"
        type={isPasswordShow ? 'text' : 'password'}
        //@ts-ignore
        control={control}
        rules={baseValidationRules}
        rightAddon={showOrHidenIcon()}
        style={{ marginTop: '22px' }}
      />
      <Button color={'pink'} style={{ marginTop: '22px' }} type={'submit'} loading={isLoading}>
        <BodyNormal weight={'normal'}>Войти</BodyNormal>
      </Button>
    </AuthForm>
  );
};
