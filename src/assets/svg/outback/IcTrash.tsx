import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';

export const IcTrash = ({
  color = '#221E1E',
  width = 20,
  height = 22,
  border = 2,
}: ISvgIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M8.1875 1.44922C8.8101 1.44918 9.40912 1.68738 9.86167 2.11497C10.3142 2.54256 10.586 3.12711 10.6212 3.74872L10.625 3.88672H14.5625C14.705 3.88676 14.8422 3.9409 14.9463 4.0382C15.0505 4.13549 15.1138 4.26869 15.1235 4.41088C15.1332 4.55307 15.0886 4.69364 14.9987 4.80419C14.9087 4.91475 14.7802 4.98704 14.639 5.00647L14.5625 5.01172H13.9655L13.0055 14.7767C12.9574 15.2635 12.7378 15.7174 12.386 16.0573C12.0341 16.3972 11.5729 16.601 11.0847 16.6322L10.9528 16.6367H5.42225C4.93285 16.6367 4.45939 16.4627 4.0865 16.1457C3.71361 15.8287 3.46559 15.3895 3.38675 14.9065L3.3695 14.776L2.40875 5.01172H1.8125C1.67657 5.01171 1.54524 4.96249 1.4428 4.87314C1.34036 4.7838 1.27374 4.66038 1.25525 4.52572L1.25 4.44922C1.25001 4.31329 1.29923 4.18196 1.38858 4.07952C1.47792 3.97708 1.60133 3.91045 1.736 3.89197L1.8125 3.88672H5.75C5.75 3.24025 6.00681 2.62027 6.46393 2.16315C6.92105 1.70603 7.54103 1.44922 8.1875 1.44922ZM8.1875 2.57422C7.85811 2.57423 7.54076 2.6981 7.29846 2.92123C7.05615 3.14436 6.9066 3.45044 6.8795 3.77872L6.875 3.88672H9.5C9.5 3.53862 9.36172 3.20478 9.11558 2.95864C8.86944 2.7125 8.5356 2.57422 8.1875 2.57422Z"
        stroke={color}
        strokeWidth={border}
      />
      <Path
        d="M10.0572 7.21279C9.95476 7.12345 9.82343 7.07422 9.6875 7.07422C9.53832 7.07422 9.39524 7.13348 9.28975 7.23897C9.18426 7.34446 9.125 7.48753 9.125 7.63672V12.8867L9.13025 12.9632C9.14968 13.1044 9.22197 13.233 9.33253 13.3229C9.44308 13.4128 9.58365 13.4575 9.72584 13.4477C9.86803 13.438 10.0012 13.3747 10.0985 13.2706C10.1958 13.1664 10.25 13.0292 10.25 12.8867V7.63672L10.2448 7.56022C10.2263 7.42555 10.1596 7.30214 10.0572 7.21279Z"
        fill={color}
      />
      <Path
        d="M7.4322 7.21279C7.32976 7.12345 7.19843 7.07422 7.0625 7.07422C6.91332 7.07422 6.77024 7.13348 6.66475 7.23897C6.55926 7.34446 6.5 7.48753 6.5 7.63672V12.8867L6.50525 12.9632C6.52468 13.1044 6.59697 13.233 6.70753 13.3229C6.81808 13.4128 6.95865 13.4575 7.10084 13.4477C7.24303 13.438 7.37622 13.3747 7.47352 13.2706C7.57082 13.1664 7.62496 13.0292 7.625 12.8867V7.63672L7.61975 7.56022C7.60126 7.42555 7.53464 7.30214 7.4322 7.21279Z"
        fill={color}
      />
    </Svg>
  );
};
