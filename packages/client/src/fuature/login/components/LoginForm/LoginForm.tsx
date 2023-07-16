import { BodyNormal } from '@components/design-system/Fonts';
import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { RouteNames } from '@routes/routeNames';
import { useState, useRef, useEffect } from 'react';
import { HidePassSVG } from '@components/design-system/SVG/HidePassSVG';
import { ShowPassSVG } from '@components/design-system/SVG/ShowPassSVG';
import { AuthForm } from '../AuthForm';
import { FormError } from '@components/specific/FormError';
import { useMutation, useQueryClient } from 'react-query';
import authService from '@services/auth.service';
import { AxiosError } from 'axios';

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

  const { mutate, isLoading, isError, error } = useMutation<void, AxiosError, LoginFormT>(
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
      {!!isError && <FormError view={'error'} description={error.response?.data!.reason} />}
      <FormInput
        name="login"
        label="Введите логин"
        control={control}
        rules={{
          required: 'Это поле обязательно',
          minLength: 3,
        }}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="password"
        label="Введите пароль"
        type={isPasswordShow ? 'text' : 'password'}
        control={control}
        rules={{
          required: 'Это поле обязательно',
          minLength: 3,
        }}
        rightAddon={showOrHidenIcon()}
        style={{ marginTop: '22px' }}
      />
      <Button color={'pink'} style={{ marginTop: '22px' }} type={'submit'} loading={isLoading}>
        <BodyNormal weight={'normal'}>Войти</BodyNormal>
      </Button>
    </AuthForm>
  );
};
