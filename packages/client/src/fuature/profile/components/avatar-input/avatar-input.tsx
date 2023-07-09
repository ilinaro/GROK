import React, { useEffect } from 'react';
import { AvatarSVG } from '@components/design-system';
import { RegisterOptions, useController } from 'react-hook-form';
import styles from './style.module.scss';
import { setAvatar } from '@store/thunks/change-user-data';

interface IAvatarInput {
  name: string;
  rules: RegisterOptions;
  control: any;
}

export const AvatarInput: React.FC<IAvatarInput> = ({ name, control, rules }) => {
  const {
    field: { ref, value, ...rest },
    fieldState,
  } = useController({
    name: name,
    control,
    rules: rules,
  });

  useEffect(() => {
    setAvatar(value);
  }, [value]);

  console.log(rest, value, rules);

  return (
    <div className={styles.Avatar}>
      <label htmlFor={name}>
        <input type="file" ref={ref} id={name} {...rest} />
        {value ? <img src={value} alt="avatar" /> : <AvatarSVG width={64} />}
      </label>
    </div>
  );
};
