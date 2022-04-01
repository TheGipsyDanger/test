import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';

export const IcMenu = ({
  color = '#A00F2D',
  width = 24,
  height = 24,
}: ISvgIconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H12.76C13.5554 21.9993 14.3179 21.6828 14.88 21.12L19.12 16.88C19.6828 16.3179 19.9993 15.5554 20 14.76V4C20 2.89543 19.1046 2 18 2ZM6 4H18V14H13C12.4477 14 12 14.4477 12 15V20H6V4Z"
        fill={color}
      />
      <Path
        d="M15.5 12C15.7761 12 16 11.7761 16 11.5V10.5C16 10.2239 15.7761 10 15.5 10H8.5C8.22386 10 8 10.2239 8 10.5V11.5C8 11.7761 8.22386 12 8.5 12H15.5Z"
        fill={color}
      />
      <Path
        d="M15.5 8C15.7761 8 16 7.77614 16 7.5V6.5C16 6.22386 15.7761 6 15.5 6H8.5C8.22386 6 8 6.22386 8 6.5V7.5C8 7.77614 8.22386 8 8.5 8H15.5Z"
        fill={color}
      />
      <Path
        d="M10.5 16C10.7761 16 11 15.7761 11 15.5V14.5C11 14.2239 10.7761 14 10.5 14H8.5C8.22386 14 8 14.2239 8 14.5V15.5C8 15.7761 8.22386 16 8.5 16H10.5Z"
        fill={color}
      />
    </Svg>
  );
};
