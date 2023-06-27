import { BodyNormal } from '@components/design-system/Fonts';

import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { RouteNames } from '@routes/routeNames';
import { useState } from 'react';
import { HidePassSVG } from '@components/design-system/SVG/HidePassSVG';
import { ShowPassSVG } from '@components/design-system/SVG/ShowPassSVG';

type LoginT = {};

interface LoginFormT {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export const LoginForm: React.FC<LoginT> = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormT>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const toggleShowPassword = () => setIsPasswordShow((prev) => !prev);

  const showOrHidddenIcon = () => {
    if (isPasswordShow) {
      return <HidePassSVG onClick={toggleShowPassword} />;
    } else {
      return <ShowPassSVG onClick={toggleShowPassword} />;
    }
  };

  const onSubmit = () => {};

  return (
    <div className={styles.containerLogin}>
      <h1>Вход</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="login"
          label="Введите электронную почту"
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
          label="Введите пароль"
          type={isPasswordShow ? 'text' : 'password'}
          control={control}
          rules={{
            required: 'Это поле обязательно',
          }}
          rightAddon={showOrHidddenIcon()}
          style={{ marginTop: '22px' }}
        />
        <Button color={'pink'} style={{ marginTop: '22px' }} type="submit">
          <BodyNormal weight={'normal'}>Войти</BodyNormal>
        </Button>
      </form>
      <div className={styles.footerLogin}>
        <BodyNormal weight={'normal'}>
          Нет аккаунта? <Link to={RouteNames.REGISTRATION}>Зарегистрироваться</Link>
        </BodyNormal>
      </div>
    </div>
  );
};
