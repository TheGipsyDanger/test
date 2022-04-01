import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';

export const IcMinus = ({
  color = '#221E1E',
  width = 20,
  height = 22,
}: ISvgIconProps) => {
  return (
    <Svg width="12" height="3" viewBox="0 0 12 3" fill="none">
      <Path
        d="M10.9074 0.234375H1.09229C-0.364098 0.234375 -0.364098 2.49319 1.09229 2.49319H10.9074C12.3642 2.49319 12.3642 0.234375 10.9074 0.234375Z"
        fill={color}
      />
    </Svg>
  );
};
