import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './Alert.module.scss';
import classNames from 'classnames'

type AlertT = {
  children?: React.ReactNode;
  type: 'success' | 'error';
  isActive: boolean;
}

export const Alert: React.FC<AlertT> = (props) => {
  const { type, isActive} = props;
  useEffect(() => {
    isActive
  })
  return (
      <div className={classNames(styles.Alert__wrapper, {
        [styles.Alert__error]: type === "error",
        [styles.Alert__wrapper_active]: isActive
      })}>
        { props.children }
        <div className={ styles.close_btn } onClick={ () => !isActive }></div>
      </div>
  );
};
