import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path, Rect, G, Ellipse, Defs, ClipPath } from 'react-native-svg';

export const IcMapLocationOrder = ({
  color = '#221E1E',
  width = 132,
  height = 64,
}: ISvgIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <G clipPath="url(#clip0_11531_13164)">
        <Rect
          x="1.02148"
          y="0.216797"
          width="130.024"
          height="63"
          rx="15"
          transform="rotate(0.32344 1.02148 0.216797)"
          fill="#F1F1F1"
        />
        <Path
          d="M98.3921 37.8256L131.42 42.4778L131.359 53.1627C131.322 59.79 125.919 65.1322 119.292 65.0948L90.042 64.9297L98.3921 37.8256Z"
          fill="#DBECF1"
        />
        <Path
          d="M108.932 -0.674233L87.5146 67.2059"
          stroke="#FEFEFE"
          strokeWidth="3"
        />
        <Path
          d="M30.9648 -0.638672L30.589 65.9337"
          stroke="#FEFEFE"
          strokeWidth="3"
        />
        <Path
          d="M-0.253906 8.69727L133.119 28.947M-0.363965 28.1934L54.8607 33.4261M133.052 40.8349L54.8607 33.4261M54.8607 33.4261L54.6817 65.1202"
          stroke="#FEFEFE"
          strokeWidth="3"
        />
        <Path
          d="M23.0595 30.6716L96.6941 37.443L108.519 0.16699"
          stroke="#221E1E"
          strokeLinecap="round"
        />
        <Ellipse
          cx="22.9537"
          cy="30.5174"
          rx="3"
          ry="3.00053"
          transform="rotate(0.32344 22.9537 30.5174)"
          fill="#221E1E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_11531_13164">
          <Rect
            x="1.03711"
            y="0.216797"
            width="130"
            height="63"
            rx="15"
            transform="rotate(0.32344 1.03711 0.216797)"
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
