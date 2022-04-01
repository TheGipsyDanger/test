import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';

export const IcBag = ({
  color = '#A00F2D',
  width = 20,
  height = 22,
}: ISvgIconProps) => {
  return (
    <Svg width="20" height="22" viewBox="0 0 20 22" fill="none">
      <Path
        d="M18 6H15C15 3.23858 12.7614 1 10 1C7.23858 1 5 3.23858 5 6H2C1.44772 6 1 6.44772 1 7V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V7C19 6.44772 18.5523 6 18 6ZM7 9.5C7 9.77614 6.77614 10 6.5 10H5.5C5.22386 10 5 9.77614 5 9.5V8.5C5 8.22386 5.22386 8 5.5 8H6.5C6.77614 8 7 8.22386 7 8.5V9.5ZM10 2C12.5 2 14 4.34315 14 6H6C6 4.34315 7.5 2 10 2ZM15 9.5C15 9.77614 14.7761 10 14.5 10H13.5C13.2239 10 13 9.77614 13 9.5V8.5C13 8.22386 13.2239 8 13.5 8H14.5C14.7761 8 15 8.22386 15 8.5V9.5Z"
        stroke={color}
        stroke-width="2"
      />
    </Svg>
  );
};
