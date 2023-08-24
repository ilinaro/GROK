import { SVGType } from '@typings/SVG';

export const BounceSVG: React.FC<SVGType> = () => {
  return (
    <>
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M31.3311 23.062C27.9443 31.2238 18.572 35.0904 10.3973 31.6983C2.22268 28.3063 -1.65871 18.94 1.72802 10.7782C5.11475 2.61644 14.4871 -1.25019 22.6618 2.14188C30.8364 5.53395 34.7178 14.9002 31.3311 23.062Z"
          fill="url(#paint0_linear_2413_325)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2413_325"
            x1="10.3131"
            y1="-9.91127"
            x2="66.055"
            y2="20.9143"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.068" stop-color="#FFC9C6" />
            <stop offset="0.1023" stop-color="#FFA7B6" />
            <stop offset="0.1719" stop-color="#FF6699" />
            <stop offset="0.2227" stop-color="#FF3D87" />
            <stop offset="0.249" stop-color="#FF2E80" />
            <stop offset="0.5144" stop-color="#9324D3" />
            <stop offset="0.6479" stop-color="#9324D3" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
