import { BodyNormal } from '@components/design-system/Fonts';

import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { RouteNames } from '@routes/routeNames';

type LoginT = {};

export const LoginForm: React.FC<LoginT> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  });

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
          type="password"
          control={control}
          rules={{
            required: 'Это поле обязательно',
          }}
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
