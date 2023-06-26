import { SVGType } from '@typings/SVG';
import { useGetCSSVars } from '@lib/useGetCSSVars';

export const EllipseSVG: React.FC<SVGType> = () => {
  return (
    <>
      <svg width="503" height="642" viewBox="0 0 503 642" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M250 640C138.04 653.678 -56.4543 557.871 51 451.5C164.927 338.722 -39.8789 279.945 7.82272 180C55.524 80.0563 410.991 -108.288 619.501 62.3459C765.497 181.816 469.687 601.543 250 640Z"
          fill="url(#paint0_linear_2013_1046)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2013_1046"
            x1="116.114"
            y1="66.7689"
            x2="109.587"
            y2="722.902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6E3DC8" />
            <stop offset="1" stop-color="#6781F7" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
