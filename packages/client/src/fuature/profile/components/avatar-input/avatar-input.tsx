import React, { useEffect } from 'react';
import { AvatarSVG } from '@components/design-system';
import { RegisterOptions, useController } from 'react-hook-form';
import styles from './style.module.scss';
import { setAvatar } from '@store/thunks/change-user-data';
import { useAppDispatch } from '@store/hooks';
import { checkAuth } from '@store/thunks/user';

interface IAvatarInput {
  name: string;
  rules: RegisterOptions;
  control: any;
}

export const AvatarInput: React.FC<IAvatarInput> = ({ name, control, rules }) => {
  const {
    field: { ref, value, onChange, ...rest },
    fieldState,
  } = useController({
    name: name,
    control,
    rules: rules,
  });

  const dispatch = useAppDispatch();

  const handleChange = async (event: any) => {
    const file = event.target.files[0];
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (!allowedMimeTypes.includes(file.type) || file.size > 1_000_000) {
      alert('Только png или jpeg, и размер не больше 1мб');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file);

    setAvatar(formData).then(() => {
      dispatch(checkAuth());
    });
  };

  return (
    <div className={styles.Avatar}>
      <label htmlFor={name}>
        <input type="file" ref={ref} id={name} onChange={handleChange} {...rest} />
        {value ? (
          <img src={`https://ya-praktikum.tech/api/v2/resources${value}`} alt="avatar" />
        ) : (
          <AvatarSVG width={64} />
        )}
      </label>
    </div>
  );
};
