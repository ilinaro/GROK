import { BodyNormal } from '@components/design-system/Fonts';

import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import styles from './RegistrationForm.module.scss';
import { RouteNames } from '@routes/routeNames';
import { useRef, useState } from 'react';
import { HidePassSVG } from '@components/design-system/SVG/HidePassSVG';
import { ShowPassSVG } from '@components/design-system/SVG/ShowPassSVG';
import { AuthForm } from 'fuature/login/components/AuthForm';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import authService from '@services/auth.service';
import { FormError } from '@components/specific/FormError';
import {
  baseValidationRules,
  emailValidationScheme,
  loginValidationScheme,
  nameValidationScheme,
  passwordValidationScheme,
  phoneValidationScheme,
} from 'fuature/profile/validation';

type RegistrationT = {};

export interface RegistrationFormT {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export const RegistrationForm: React.FC<RegistrationT> = () => {
  const queryClient = useQueryClient();

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const { mutate, isLoading, isError, error } = useMutation<void, AxiosError, RegistrationFormT>(
    async (data) => {
      await authService.signup(data);
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormT>({
    defaultValues: {
      first_name: '',
      second_name: '',
      login: '',
      email: '',
      phone: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const password = useRef({});
  password.current = watch('password', '');

  const toggleShowPassword = () => setIsPasswordShow((prev) => !prev);

  const showOrHidddenIcon = () => {
    if (!watch().password.length) return;

    if (isPasswordShow) {
      return <HidePassSVG onClick={toggleShowPassword} />;
    } else {
      return <ShowPassSVG onClick={toggleShowPassword} />;
    }
  };

  // Валидатор для проверки двух полей
  const validatePasswordMatch = (value: string) => {
    const { password } = watch();
    return value === password || 'Пароли не совпадают';
  };

  const onSubmit = (data: RegistrationFormT) => {
    mutate(data);
  };

  const footer = () => {
    return (
      <BodyNormal weight={'normal'}>
        Уже регистрировались? <Link to={RouteNames.LOGIN}>Войти</Link>
      </BodyNormal>
    );
  };

  return (
    <AuthForm
      title="Регистрация"
      onSubmit={handleSubmit(onSubmit)}
      footer={footer()}
      className={styles.containerRegistration}
    >
      {!!isError && <FormError view={'error'} description={error.response?.data!.reason} />}
      <FormInput
        name="first_name"
        label="Имя"
        control={control}
        rules={nameValidationScheme}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="second_name"
        label="Фамилия"
        control={control}
        rules={nameValidationScheme}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="login"
        label="Логин"
        control={control}
        rules={loginValidationScheme}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="email"
        label="Электронная почта"
        control={control}
        rules={emailValidationScheme}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name={'phone'}
        label={'Телефон'}
        control={control}
        type={'tel'}
        mask={'+7 (999) 999-99-99'}
        rules={phoneValidationScheme}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="password"
        label="Пароль"
        type={isPasswordShow ? 'text' : 'password'}
        control={control}
        rules={passwordValidationScheme}
        rightAddon={showOrHidddenIcon()}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="repeatPassword"
        label="Повторите пароль"
        type={isPasswordShow ? 'text' : 'password'}
        control={control}
        rules={{
          validate: validatePasswordMatch,
          ...baseValidationRules,
        }}
        rightAddon={showOrHidddenIcon()}
        style={{ marginTop: '22px' }}
      />
      <Button color={'pink'} style={{ marginTop: '22px' }} type={'submit'} loading={isLoading}>
        <BodyNormal weight={'normal'}>Зарегистрироваться</BodyNormal>
      </Button>
    </AuthForm>
  );
};
