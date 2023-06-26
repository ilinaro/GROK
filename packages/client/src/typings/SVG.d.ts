import { SystemColor } from './system';

export interface SVGType {
  width?: number;
  fill?: string;
  full?: boolean;
  direction?: 'left' | 'right' | 'up' | 'down';
  path?: 'full' | 'left' | 'right';
  strokeColor?: SystemColor;
  color?: SystemColor;
}
