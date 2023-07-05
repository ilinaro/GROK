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
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { signup } from '@store/thunks/user';
import { Spinner } from '@components/specific/Spinner/Spinner';

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
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((store) => store.user);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
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
    dispatch(signup(data));
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
      <FormInput
        name="first_name"
        label="Имя"
        control={control}
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/gm,
            message: 'Некорректное имя',
          },
        }}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="second_name"
        label="Фамилия"
        control={control}
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/gim,
            message: 'Некорректная фамилия',
          },
        }}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="login"
        label="Логин"
        control={control}
        rules={{
          required: 'Это поле обязательно',
        }}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="email"
        label="Электронная почта"
        control={control}
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Некорректный адрес электронной почты',
          },
        }}
        style={{ marginTop: '22px' }}
      />
      <FormInput
        name="password"
        label="Пароль"
        type={isPasswordShow ? 'text' : 'password'}
        control={control}
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
            message: 'min 8 символов, min 1 цифра и 1 загл. буква',
          },
        }}
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
          required: 'Это поле обязательно',
        }}
        rightAddon={showOrHidddenIcon()}
        style={{ marginTop: '22px' }}
      />
      <Button color={'pink'} style={{ marginTop: '22px' }} type={'submit'} loading={loading}>
        <BodyNormal weight={'normal'}>Зарегистрироваться</BodyNormal>
      </Button>
    </AuthForm>
  );
};
