import React, { MouseEventHandler } from 'react'
import styles from './AlertButton.module.scss';
import classNames from 'classnames';
type AlertButtonT = {
  children?: React.ReactNode,
  onClick: () => void | Promise<void>,
  type: 'success' | 'error';
}
export const AlertButton: React.FC<AlertButtonT> = (props) => {
  const { type, onClick } = props;
  return (
      <button className={classNames(styles.Alert__button, {
        [styles.btn__action_cancel]: type === "error"
      })} onClick={ onClick }>{ props.children }</button>
  );
};
