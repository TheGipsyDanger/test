import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcHouse = ({
  color = '#221E1E',
  width = 28,
  height = 18,
}: ISvgIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M1.10938 8.71874L3.92419 6.33304M19.0353 8.71874L16.0723 6.1849M16.0723 6.1849L10.6672 1.4389C10.2858 1.10406 9.71416 1.10795 9.33741 1.44794L3.92419 6.33304M16.0723 6.1849V16.1479C16.0723 16.7001 15.6246 17.1479 15.0723 17.1479H13.2575C12.7052 17.1479 12.2575 16.7001 12.2575 16.1479V12.5284C12.2575 11.9762 11.8098 11.5284 11.2575 11.5284H8.739C8.18672 11.5284 7.739 11.9762 7.739 12.5284L7.739 16.1479C7.739 16.7001 7.29129 17.1479 6.739 17.1479H4.92419C4.37191 17.1479 3.92419 16.7001 3.92419 16.1479L3.92419 6.33304"
        stroke={theme.colors[color] || color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};
