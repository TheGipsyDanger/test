import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';

export const IcFacebook = ({
  color = '#FEFEFE',
  width = 20,
  height = 22,
}: ISvgIconProps) => {
  return (
    <Svg width="9" height="18" viewBox="0 0 9 18" fill="none">
      <Path
        d="M2.29749 18V9.55388H0V6.51287H2.29749V3.91545C2.29749 1.87438 3.65463 0 6.78176 0C8.04789 0 8.98413 0.11799 8.98413 0.11799L8.91036 2.95778C8.91036 2.95778 7.95554 2.94874 6.9136 2.94874C5.78591 2.94874 5.60524 3.45391 5.60524 4.29237V6.51287H9L8.85229 9.55388H5.60524V18H2.29749Z"
        fill="#FEFEFE"
      />
    </Svg>
  );
};
