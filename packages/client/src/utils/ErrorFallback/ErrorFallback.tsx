import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import styles from './ErrorFallback.module.scss';
import { BodyNormal } from '@components/design-system/Fonts';

export const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <div className={styles.ErrorFallback}>
      <BodyNormal>Что-то пошло не так...</BodyNormal>
      <pre>{error.message}</pre>
    </div>
  );
};
