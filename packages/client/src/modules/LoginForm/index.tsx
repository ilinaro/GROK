//ts-ignore
import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { FormInput } from '../ui/FormInput/FormInput';
import { Button } from '../ui/Button/Button';

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  return (
    <div className={styles.container}>
      <h1>GROK</h1>
      <div className={styles.containerLogin}>
        <h2>Вход</h2>
        <form className={styles.loginForm}>
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
            errors={errors}
          />
          <FormInput
            name="password"
            label="Введите электронную почту"
            type="password"
            control={control}
            rules={{
              required: 'Это поле обязательно',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Некорректный адрес электронной почты',
              },
            }}
            errors={errors}
          />
          <Button value="Войти" block={true} size="l" className={styles.buttonLogin} />
        </form>
        <div className={styles.footerLogin}>
          <span>
            Нет аккаунта? <a href="/">Зарегистрироваться</a>
          </span>
        </div>
      </div>
    </div>
  );
};
