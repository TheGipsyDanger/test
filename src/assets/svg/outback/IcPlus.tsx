import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';

export const IcPlus = ({
  color = '#221E1E',
  width = 24,
  height = 24,
}: ISvgIconProps) => {
  return (
    <Svg width="12" height="13" viewBox="0 0 12 13" fill="none">
      <Path
        d="M10.9075 5.22995H7.12957V1.45198C7.12957 -0.0048281 4.87029 -0.0048281 4.87029 1.45198V5.22995H1.09233C-0.364109 5.22995 -0.364109 7.48922 1.09233 7.48922H4.87029V11.2672C4.87029 12.724 7.12957 12.724 7.12957 11.2672V7.48922H10.9075C12.3642 7.48922 12.3642 5.22995 10.9075 5.22995Z"
        fill={color}
      />
    </Svg>
  );
};
