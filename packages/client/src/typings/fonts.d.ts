import { SystemColorT, SystemFontWeightT } from './system';

import { CSSProperties } from 'react';

export type FontPropsT = JSX.IntrinsicElements['span'] & {
  className?: string;
  weight?: SystemFontWeightT;
  color?: SystemColorT;
  children?: React.ReactNode;
  sx?: CSSProperties;
};
