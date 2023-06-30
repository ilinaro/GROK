import { Control, FieldValue, RegisterOptions, useController } from 'react-hook-form';
import styles from './FormInput.module.scss';
import { BodyNormal } from '@components/design-system/Fonts';

type FormInputProps = {
  name: string;
  label: string;
  type?: 'text' | 'password';
  control: any;
  rules?: RegisterOptions;
} & JSX.IntrinsicElements['label'];

export const FormInput: React.FC<FormInputProps> = ({ name, label, type = 'text', control, rules, ...props }) => {
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
        <input ref={ref} type={type} className={styles.input} placeholder=" " {...inputProps} />
        <span className={styles.placeholder}>{label}</span>
      </div>
      <BodyNormal color={'pink'} style={{ position: 'absolute', color: 'var(--color-pink)' }}>
        {error?.message}
      </BodyNormal>
    </label>
  );
};
