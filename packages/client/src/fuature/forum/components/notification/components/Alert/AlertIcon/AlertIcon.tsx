import React from 'react';
import styles from './AlertIcon.module.scss';
import classNames from 'classnames'

type AlertIconT = {
  type: 'success' | 'error';
}

export const AlertIcon: React.FC<AlertIconT> = (props) => {
  const { type } = props;
  return (
      <div className={ classNames(styles.Alert__icon, {
        [styles.Alert__icon_err]: type === "error"
      }) }></div>
  );
};
