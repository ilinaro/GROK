import React from 'react';
import styles from './Box.module.scss';

type BoxT = {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxT> = (props) => {
  return (
      <div className={ styles.Box__wrapper }>
        { props.children }
      </div>
  );
};
