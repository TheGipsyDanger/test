import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcBack = ({
  color = '#FEFEFE',
  width = 20,
  height = 22,
}: ISvgIconProps) => {
  return (
    <Svg width="10" height="15" viewBox="0 0 10 15" fill="none">
      <Path
        d="M8.23438 2L2.00057 7.53163L8.23437 13"
        stroke={theme.colors[color] || color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
