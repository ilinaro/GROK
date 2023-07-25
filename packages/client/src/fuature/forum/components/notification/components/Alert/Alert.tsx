import React from 'react';
import styles from './Alert.module.scss';
import classNames from 'classnames'

type AlertT = {
  children?: React.ReactNode;
  type: string;
}

export const Alert: React.FC<AlertT> = (props) => {
  const { type } = props;
  return (
      <div className={classNames(styles.Alert__wrapper, {
        [styles.Alert__error]: type === "unsuccess"
      })}>
        { props.children }
      </div>
  );
};
