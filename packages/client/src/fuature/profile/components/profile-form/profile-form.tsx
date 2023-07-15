import React, { useEffect, useState } from 'react';
import { Input } from '../input';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { AvatarInput } from '../avatar-input/avatar-input';
import { Button } from '../button';
import { PenSVG } from '@components/design-system';
import { useAppSelector } from '@store/hooks';
import { EMAIL_REGEX, PHONE_REGEX } from 'fuature/profile/constants';

export const ProfileForm: React.FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useAppSelector((store) => store.user);

  const { control, watch, handleSubmit, formState, setValue } = useForm<FieldValues>({
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
          onClick={(e: React.MouseEvent) => {
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
              value: EMAIL_REGEX,
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
              value: PHONE_REGEX,
              message: 'Номер может начинаться с 7 +7 или 8',
            },
          }}
          disabled={!isEdit}
        />
      </fieldset>
    </form>
  );
};
