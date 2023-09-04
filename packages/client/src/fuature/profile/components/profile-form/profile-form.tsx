import React, { useEffect, useState } from 'react';
import { Input } from '../input';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { AvatarInput } from '../avatar-input/avatar-input';
import { Button, PenSVG } from '@components/design-system';
import { Button as ProfileButton } from '../button';
import { useAppSelector } from '@store/hooks';
import { updateUserData } from '@store/thunks/change-user-data';
import {
  emailValidationScheme,
  loginValidationScheme,
  nameValidationScheme,
  phoneValidationScheme,
} from '../../validation';

export interface IUpdateUser {
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  email: string;
  phone: string;
  id?: number;
}

export const ProfileForm: React.FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useAppSelector((store) => store.user);

  const { control, handleSubmit, formState, setValue } = useForm<FieldValues>({
    defaultValues: {
      login: '',
      first_name: '',
      second_name: '',
      email: '',
      phone: '',
      avatar: '',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    if (user) {
      const keys = Object.keys(user);

      keys.forEach((key: string) => {
        setValue(key, user[key]);
      });
    }
  }, [user]);

  const onSubmit = async (data: FieldValues) => {
    const { id, ...rest } = data;

    try {
      await updateUserData(rest as IUpdateUser);
    } catch (e) {
      console.log(e);
    } finally {
      window.location.reload();
    }
  };

  return (
    <form className={styles.FormContainer}>
      <div className={styles.Controls}>
        <AvatarInput name="avatar" control={control} rules={{}} />
        <ProfileButton
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            setIsEdit((prevState) => !prevState);
          }}
        >
          <PenSVG />
          {isEdit ? 'Назад к просмотру' : 'Изменить'}
        </ProfileButton>
      </div>
      <fieldset>
        <Input
          type="text"
          placeholder="Логин"
          control={control}
          name="login"
          label="Логин"
          disabled={!isEdit}
          rules={loginValidationScheme}
        />
        <Input
          type="text"
          placeholder="Имя"
          control={control}
          name="first_name"
          rules={nameValidationScheme}
          label="Имя"
          disabled={!isEdit}
        />
        <Input
          type="text"
          placeholder="Фамилия"
          control={control}
          name="second_name"
          label="Фамилия"
          disabled={!isEdit}
          rules={nameValidationScheme}
        />
        <Input
          type="email"
          placeholder="Почта"
          control={control}
          name="email"
          label="Почта"
          rules={emailValidationScheme}
          disabled={!isEdit}
        />
        <Input
          type="phone"
          placeholder="Телефон"
          control={control}
          name="phone"
          label="Телефон"
          rules={phoneValidationScheme}
          disabled={!isEdit}
        />
      </fieldset>
      <Button
        style={{ width: '100%', marginTop: '15px' }}
        disabled={!formState.isValid || !isEdit}
        onClick={handleSubmit(onSubmit)}
      >
        Сохранить
      </Button>
    </form>
  );
};
