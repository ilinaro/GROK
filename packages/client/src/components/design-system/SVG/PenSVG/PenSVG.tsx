import { SVGType } from '@typings/SVG';
import { useGetCSSVars } from '@lib/useGetCSSVars';

export const PenSVG: React.FC<SVGType> = ({ color = 'white-darken' }) => {
  const currentColor = useGetCSSVars('color', color);
  return (
    <>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M3 17.9625V21.0025C3 21.2825 3.22 21.5025 3.5 21.5025H6.54C6.67 21.5025 6.8 21.4525 6.89 21.3525L17.81 10.4425L14.06 6.6925L3.15 17.6025C3.05 17.7025 3 17.8225 3 17.9625ZM20.71 7.5425C21.1 7.1525 21.1 6.5225 20.71 6.1325L18.37 3.7925C17.98 3.4025 17.35 3.4025 16.96 3.7925L15.13 5.6225L18.88 9.3725L20.71 7.5425V7.5425Z"
          fill={currentColor}
        />
      </svg>
    </>
  );
};
