import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIconProps } from '~/utils';
import { theme } from '~/styles/Theme';

export const IcCard = ({
  color = '#221E1E',
  width = 20,
  height = 22,
}: ISvgIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M18.4727 0H2.47266C1.36809 0 0.472656 0.89543 0.472656 2V14C0.472656 15.1046 1.36809 16 2.47266 16H18.4727C19.5772 16 20.4727 15.1046 20.4727 14V2C20.4727 0.89543 19.5772 0 18.4727 0ZM18.4727 2V5H2.47266V2H18.4727ZM2.47266 14V8H18.4727V14H2.47266ZM7.97266 10H4.97266C4.69651 10 4.47266 10.2239 4.47266 10.5V11.5C4.47266 11.7761 4.69651 12 4.97266 12H7.97266C8.2488 12 8.47266 11.7761 8.47266 11.5V10.5C8.47266 10.2239 8.2488 10 7.97266 10Z"
        fill={theme.colors[color] || color}
      />
    </Svg>
  );
};
