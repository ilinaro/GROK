import { Control, FieldValue, RegisterOptions, useController } from 'react-hook-form';
import styles from './FormInput.module.scss';

interface FormInputProps {
  name: string;
  label: string;
  type?: 'text' | 'password';
  control: Control;
  rules: RegisterOptions;
}

export const FormInput = ({ name, label, type = 'text', control, rules }: FormInputProps) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: name,
    control,
    rules: rules,
  });

  return (
    <label className={styles.formInput}>
      <div className={styles.inputContainer}>
        <input ref={ref} type={type} className={styles.input} {...inputProps} />
        <span className={styles.placeholder}>{label}</span>
      </div>
      <span className={styles.error}>{error?.message}</span>
    </label>
  );
};
