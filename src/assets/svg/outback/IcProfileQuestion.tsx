import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcProfileQuestion = ({
  color = '#F30A42',
  width = 81,
  height = 80,
}: ISvgIconProps) => {
  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4727 2C6.05438 2 2.47266 5.58172 2.47266 10C2.47266 14.4183 6.05438 18 10.4727 18C14.8909 18 18.4727 14.4183 18.4727 10C18.4727 5.58172 14.8909 2 10.4727 2ZM0.472656 10C0.472656 4.47715 4.94981 0 10.4727 0C15.9955 0 20.4727 4.47715 20.4727 10C20.4727 15.5228 15.9955 20 10.4727 20C4.94981 20 0.472656 15.5228 0.472656 10Z"
        fill="#221E1E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4727 14C11.0249 14 11.4727 14.4477 11.4727 15V15.01C11.4727 15.5623 11.0249 16.01 10.4727 16.01C9.92037 16.01 9.47266 15.5623 9.47266 15.01V15C9.47266 14.4477 9.92037 14 10.4727 14Z"
        fill="#221E1E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.94747 4.34507C9.44687 4.09796 9.99682 3.97015 10.554 3.97169C11.1112 3.97324 11.6604 4.1041 12.1585 4.35398C12.6565 4.60385 13.0897 4.96592 13.424 5.41168C13.7583 5.85744 13.9846 6.37471 14.0851 6.92278C14.1855 7.47085 14.1573 8.03475 14.0028 8.57009C13.8483 9.10543 13.5716 9.59759 13.1945 10.0078C12.8175 10.4181 12.3503 10.7352 11.8299 10.9342C11.8215 10.9374 11.813 10.9405 11.8044 10.9435C11.7022 10.9795 11.6144 11.0477 11.5543 11.1379C11.4942 11.2281 11.465 11.3353 11.4711 11.4435C11.5024 11.9949 11.0807 12.4673 10.5293 12.4986C9.97794 12.5298 9.50559 12.1082 9.47432 11.5568C9.44363 11.0157 9.58958 10.4794 9.89018 10.0285C10.1877 9.58226 10.6207 9.24365 11.1251 9.06244C11.3526 8.97378 11.5568 8.83422 11.722 8.65441C11.8896 8.47208 12.0126 8.25335 12.0813 8.01542C12.1499 7.77749 12.1625 7.52687 12.1178 7.28328C12.0732 7.03969 11.9726 6.80979 11.824 6.61168C11.6754 6.41357 11.4829 6.25265 11.2616 6.14159C11.0402 6.03053 10.7961 5.97237 10.5485 5.97169C10.3008 5.971 10.0564 6.0278 9.83444 6.13763C9.61249 6.24746 9.41905 6.40731 9.26937 6.60459C8.93555 7.04458 8.30827 7.13064 7.86828 6.79682C7.4283 6.46301 7.34223 5.83572 7.67605 5.39574C8.01284 4.95184 8.44806 4.59218 8.94747 4.34507Z"
        fill="#221E1E"
      />
    </Svg>
  );
};