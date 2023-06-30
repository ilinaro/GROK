import { BodyNormal } from '@components/design-system/Fonts';

import { Button } from '@components/design-system';
import { Link } from 'react-router-dom';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import styles from './RegistrationForm.module.scss';
import { RouteNames } from '@routes/routeNames';

type RegistrationT = {};

export const RegistrationForm: React.FC<RegistrationT> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      name: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = () => {};

  return (
    <div className={styles.containerLogin}>
      <h1>Регистрация</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
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
          name="name"
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
          name="lastName"
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
        <Button color={'pink'} style={{ marginTop: '22px' }} type="submit">
          <BodyNormal weight={'normal'}>Зарегистрироваться</BodyNormal>
        </Button>
      </form>
      <div className={styles.footerLogin}>
        <BodyNormal weight={'normal'}>
          Уже регистрировались? <Link to={RouteNames.LOGIN}>Войти</Link>
        </BodyNormal>
      </div>
    </div>
  );
};
