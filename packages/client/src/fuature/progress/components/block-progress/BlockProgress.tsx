import React from 'react';
import styles from './BlockProgress.module.scss';
import { ProgressSVG } from '@components/design-system';
import { SystemColor } from '@typings/system';
import clsx from 'clsx';

interface IProgressBlock {
  color?: SystemColor;
  isCompleted?: boolean;
}

export const ProgressBlock: React.FC<IProgressBlock> = ({ color, isCompleted = false }) => (
  <div className={clsx(styles.Container, { [styles.IsCompleted]: isCompleted })}>
    {isCompleted && <ProgressSVG color={color} />}
  </div>
);
