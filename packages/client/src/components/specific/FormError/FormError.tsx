import { CrosCircleSVG } from '@components/design-system/SVG/CrosCircleSVG';
import styles from './FormError.module.scss';
import clsx from 'clsx';

type FormError = {
  view: 'error' | 'success';
  title?: string;
  description: string;
};

export const FormError = ({ view, title, description }: FormError) => {
  if (!title) {
    if (view === 'error') {
      title = 'Произошла ошибка';
    }

    if (view === 'success') {
      title = 'Успешно';
    }
  }

  const iconView = {
    success: <CrosCircleSVG color={'yellow'} />,
    error: <CrosCircleSVG color={'pink'} />,
  };

  return (
    <div className={styles.FormError}>
      <div className={styles.FormError__icon}>{iconView[view]}</div>
      <div className={styles.FormError__content}>
        <div className={styles['FormError__content-title']}>{title}</div>
        <div className={styles['FormError__content-description']}>{description}</div>
      </div>
    </div>
  );
};
