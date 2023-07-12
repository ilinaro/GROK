import React, { useEffect, useState } from 'react';
import { Input } from '../input';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { AvatarInput } from '../avatar-input/avatar-input';
import { Button } from '../button';
import { PenSVG } from '@components/design-system';
import { useAppSelector } from '@store/hooks';
import { User } from '@store/types/userTypes';

export const ProfileForm = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useAppSelector((store) => store.user);

  const { control, watch, handleSubmit, formState, setValue } = useForm<any>({
    defaultValues: {
      login: '',
      first_name: '',
      second_name: '',
      email: '',
      phone: '',
      avatar: '',
    },
  });

  useEffect(() => {
    if (user) {
      const keys = Object.keys(user);

      keys.forEach((key: string) => {
        setValue(key, user[key]);
      });
    }
  }, [user]);

  return (
    <form className={styles.FormContainer}>
      <div className={styles.Controls}>
        <AvatarInput name="avatar" control={control} rules={{}} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            setIsEdit((prevState) => !prevState);
          }}
        >
          <PenSVG />
          {isEdit ? 'Сохранить' : 'Изменить'}
        </Button>
      </div>
      <fieldset>
        <Input type="text" placeholder="Логин" control={control} name="login" label="Логин" disabled={!isEdit} />
        <Input type="text" placeholder="Имя" control={control} name="first_name" label="Имя" disabled={!isEdit} />
        <Input
          type="text"
          placeholder="Фамилия"
          control={control}
          name="second_name"
          label="Фамилия"
          disabled={!isEdit}
        />
        <Input
          type="email"
          placeholder="Почта"
          control={control}
          name="email"
          label="Почта"
          rules={{
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Хмм, это не выглядит как электронная почта',
            },
          }}
          disabled={!isEdit}
        />
        <Input
          type="phone"
          placeholder="Телефон"
          control={control}
          name="phone"
          label="Телефон"
          rules={{
            pattern: {
              value: /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
              message: 'Номер может начинаться с 7 +7 или 8',
            },
          }}
          disabled={!isEdit}
        />
      </fieldset>
    </form>
  );
};
