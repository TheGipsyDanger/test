import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcArrowLeft = ({
  color = '#221E1E',
  width = 10,
  height = 15,
}: ISvgIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M8.23438 2L2.00057 7.53163L8.23437 13"
        stroke={theme.colors[color] || color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
