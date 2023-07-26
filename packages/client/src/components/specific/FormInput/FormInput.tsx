import { Control, FieldValues, RegisterOptions, useController } from 'react-hook-form';
import styles from './FormInput.module.scss';
import { BodyNormal } from '@components/design-system/Fonts';
import { ReactNode } from 'react';
import InputMask from 'react-input-mask';
import clsx from 'clsx';

type FormInputProps = {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'tel';
  control: Control<FieldValues>;
  rules?: RegisterOptions;
  rightAddon?: ReactNode;
  mask?: string;
} & JSX.IntrinsicElements['label'];

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = 'text',
  control,
  rules,
  rightAddon,
  mask,
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
        {mask ? (
          <InputMask mask={mask} className={styles.input} placeholder=" " {...inputProps} />
        ) : (
          <input ref={ref} type={type} className={styles.input} placeholder=" " {...inputProps} />
        )}
        <span className={styles.placeholder}>{label}</span>
      </div>
      <BodyNormal color={'pink'} style={{ position: 'absolute', color: 'var(--color-pink)', fontSize: '12px' }}>
        {error?.message}
      </BodyNormal>
      {rightAddon && <div className={clsx(styles.icon, styles.iconRight)}>{rightAddon}</div>}
    </label>
  );
};
