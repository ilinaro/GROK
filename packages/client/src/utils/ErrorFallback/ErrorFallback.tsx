import { FallbackProps } from 'react-error-boundary';
import styles from './ErrorFallback.module.scss';
import { BodyNormal } from '@components/design-system/Fonts';

export const ErrorFallback = (props: FallbackProps) => {
  const { error } = props;

  return (
    <div className={styles.ErrorFallback}>
      <BodyNormal>Что-то пошло не так...</BodyNormal>
      <pre>{error.message}</pre>
    </div>
  );
};
