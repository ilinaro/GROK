import { SVGType } from '@typings/SVG';
import { useGetCSSVars } from '@lib/useGetCSSVars';

export const PortSVG: React.FC<SVGType & { bonus?: number }> = ({ color = 'yellow', bonus = 3 }) => {
  const currentColor = useGetCSSVars('color', color);
  console.log('bonus', bonus);
  return (
    <>
      <svg width="40" height="40" viewBox="0 0 85 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        {bonus > 0 && (
          <path
            // eslint-disable-next-line max-len
            d="M2.47767 80.6008C-1.3972 80.5642 14.181 63.4138 14.3934 40.9086C14.6058 18.4034 -2.54921 -0.0312542 1.32565 0.00532338C5.20052 0.041901 28.6378 18.5359 28.4254 41.0411C28.2129 63.5462 6.35254 80.6374 2.47767 80.6008Z"
            fill={currentColor}
          />
        )}
        {bonus > 1 && (
          <path
            // eslint-disable-next-line max-len
            d="M30.4777 80.6008C26.6028 80.5642 42.181 63.4138 42.3934 40.9086C42.6058 18.4034 25.4508 -0.0312542 29.3257 0.00532338C33.2005 0.041901 56.6378 18.5359 56.4254 41.0411C56.2129 63.5462 34.3525 80.6374 30.4777 80.6008Z"
            fill={currentColor}
          />
        )}
        {bonus > 2 && (
          <path
            // eslint-disable-next-line max-len
            d="M58.4777 80.6008C54.6028 80.5642 70.181 63.4138 70.3934 40.9086C70.6058 18.4034 53.4508 -0.0312542 57.3257 0.00532338C61.2005 0.041901 84.6378 18.5359 84.4254 41.0411C84.2129 63.5462 62.3525 80.6374 58.4777 80.6008Z"
            fill={currentColor}
          />
        )}
      </svg>
    </>
  );
};
