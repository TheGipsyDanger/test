import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcArrowDown = ({
  color = '#221E1E',
  width = 10,
  height = 15,
}: ISvgIconProps) => {
  return (
    <Svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <Path
        d="M2 2L9.04026 8L16 2"
        stroke={theme.colors[color] || color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
