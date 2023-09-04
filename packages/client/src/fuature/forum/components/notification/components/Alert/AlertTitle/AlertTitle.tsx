import React from 'react';
import styles from './AlertTitle.module.scss';

type AlertTitleT = {
  children?: React.ReactNode;
}

export const AlertTitle: React.FC<AlertTitleT> = (props) => {
  return (
      <h1 className={ styles.Alert__title }>{ props.children }</h1>
  );
};
