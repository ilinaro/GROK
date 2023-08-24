import React from 'react';
import styles from './AlertDesc.module.scss';

type AlertDescT = {
  children?: React.ReactNode;
}

export const AlertDesc: React.FC<AlertDescT> = (props) => {
  return (
    <div className={ styles.Alert__description }>{ props.children }</div>
  );
};
