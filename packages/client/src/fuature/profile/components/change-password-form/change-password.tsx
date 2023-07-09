import React, { useState } from 'react';
import { Input } from '../input';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { Button } from '@components/design-system';

interface IChangePasswordForm {
  setMode(value: string): void;
}

export const ChangePasswordForm: React.FC<IChangePasswordForm> = ({ setMode }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { control, watch, handleSubmit, formState } = useForm<any>({
    defaultValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
  });

  return (
    <form className={styles.FormContainer}>
      <Input type="text" placeholder="Старый пароль" control={control} name="old_password" label="Старый пароль" />
      <Input type="text" placeholder="Новый пароль" control={control} name="new_password" label="Новый пароль" />
      <Input
        type="text"
        placeholder="Подтвердите пароль"
        control={control}
        name="confirm_password"
        label="Подтвердите пароль"
      />
      <Button>Сохранить</Button>
      <Button onClick={() => setMode('profile')}>Назад</Button>
    </form>
  );
};
