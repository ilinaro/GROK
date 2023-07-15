import React, { ReactNode } from 'react';
import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import styles from './style.module.scss';
import { BodyNormal } from '@components/design-system/Fonts';
import clsx from 'clsx';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  control: Control<FieldValues>;
  rules?: RegisterOptions;
  rightAddon?: ReactNode;
  disabled: boolean;
} & JSX.IntrinsicElements['label'];

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  control,
  rules,
  rightAddon,
  disabled,
  ...props
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: name,
    control,
    rules: rules,
  });

  return (
    <label className={styles.formInput} {...props}>
      <div className={styles.inputContainer}>
        <input
          disabled={disabled}
          ref={ref}
          type={type}
          className={clsx(styles.input, { [styles.EditMode]: !disabled })}
          placeholder=" "
          {...inputProps}
        />
        <span className={styles.placeholder}>{label}</span>
      </div>
      <BodyNormal color={'pink'} style={{ position: 'absolute', color: 'var(--color-pink)', fontSize: '12px' }}>
        {error?.message}
      </BodyNormal>
      {rightAddon && <div className={clsx(styles.icon, styles.iconRight)}>{rightAddon}</div>}
    </label>
  );
};
