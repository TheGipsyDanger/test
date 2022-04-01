import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcSearchPlus = ({
  color = '#FEFEFE',
  width = 20,
  height = 22,
}: ISvgIconProps) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67868 17.988 3.5 12.8333 3.5C7.67868 3.5 3.5 7.67868 3.5 12.8333C3.5 17.988 7.67868 22.1667 12.8333 22.1667Z"
        stroke={theme.colors[color] || color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.5008 24.5008L19.4258 19.4258"
        stroke={theme.colors[color] || color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3843 11.6431H18.0859V14.3193H14.3843V18.5029H11.5645V14.3193H7.85254V11.6431H11.5645V7.63379H14.3843V11.6431Z"
        fill={theme.colors[color] || color}
      />
    </Svg>
  );
};
