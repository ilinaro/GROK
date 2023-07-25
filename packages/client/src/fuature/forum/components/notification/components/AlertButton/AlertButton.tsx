import React from 'react';
import styles from './AlertButton.module.scss';
import classNames from 'classnames'
type AlertButtonT = {
  children?: React.ReactNode;
  onClick: () => void;
  type: string;
}
export const AlertButton: React.FC<AlertButtonT> = (props) => {
  const { type, onClick } = props;
  return (
      <button className={classNames(styles.Alert__button, {
        [styles.btn__action_no]: type === "unsuccess"
      })} onClick={ onClick }>{ props.children }</button>
  );
};
