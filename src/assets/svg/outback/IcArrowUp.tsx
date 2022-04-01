import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcArrowUp = ({
  color = '#221E1E',
  width = 10,
  height = 15,
}: ISvgIconProps) => {
  return (
    <Svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <Path
        d="M16 8.00098L8.95974 2.00098L2 8.00098"
        stroke={theme.colors[color] || color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
