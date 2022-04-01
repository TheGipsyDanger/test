import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcAlert = ({
  color = '#F30A42',
  width = 81,
  height = 80,
}: ISvgIconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_5998_184091)">
        <Path
          d="M17.379 19.2728C17.2464 19.0431 17.028 18.8755 16.7718 18.8068C16.5156 18.7382 16.2427 18.7741 16.013 18.9067C14.1755 19.9676 11.9919 20.2551 9.94244 19.706C7.893 19.1568 6.14565 17.816 5.08479 15.9785C4.29546 14.6099 3.92904 13.0383 4.03174 11.4617C4.13444 9.88512 4.70166 8.37426 5.66187 7.11962C6.62208 5.86498 7.93228 4.92275 9.42727 4.41174C10.9223 3.90072 12.5351 3.84381 14.0624 4.24818C15.0828 4.51434 16.0398 4.98135 16.8776 5.62188C17.7153 6.26241 18.4169 7.0636 18.9412 7.97855C19.2575 8.53433 19.5121 9.12296 19.7007 9.734C19.731 9.86716 19.7882 9.99271 19.8689 10.1029C19.9495 10.2131 20.0519 10.3056 20.1697 10.3747C20.2875 10.4438 20.4182 10.4881 20.5537 10.5048C20.6893 10.5214 20.8268 10.5102 20.9578 10.4716C21.0888 10.4331 21.2106 10.3682 21.3155 10.2808C21.4205 10.1934 21.5064 10.0855 21.5681 9.96364C21.6297 9.84178 21.6658 9.70859 21.674 9.57227C21.6822 9.43595 21.6624 9.2994 21.6158 9.17103C21.3856 8.40688 21.0694 7.67134 20.6732 6.97855C19.6765 5.27271 18.1968 3.90033 16.4209 3.03462C14.645 2.1689 12.6524 1.84864 10.6947 2.11425C8.73694 2.37986 6.90173 3.21944 5.42067 4.52703C3.93961 5.83462 2.87906 7.55163 2.37287 9.46137C1.69254 11.9981 2.04487 14.701 3.35274 16.9785C4.67882 19.2754 6.86301 20.9514 9.4248 21.6378C11.9866 22.3242 14.7161 21.9649 17.013 20.6388C17.2427 20.5062 17.4103 20.2878 17.4789 20.0316C17.5476 19.7754 17.5116 19.5025 17.379 19.2728Z"
          fill={theme.colors[color] || color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1563 18.2373C12.4878 18.2373 12.8057 18.1056 13.0401 17.8712C13.2746 17.6368 13.4063 17.3188 13.4063 16.9873C13.4063 16.6558 13.2746 16.3378 13.0401 16.1034C12.8057 15.869 12.4878 15.7373 12.1563 15.7373C11.8247 15.7373 11.5068 15.869 11.2724 16.1034C11.0379 16.3378 10.9062 16.6558 10.9062 16.9873C10.9062 17.3188 11.0379 17.6368 11.2724 17.8712C11.5068 18.1056 11.8247 18.2373 12.1563 18.2373Z"
          fill={theme.colors[color] || color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1562 5.64062C12.7776 5.64062 13.2812 6.1443 13.2812 6.76562L13.2812 13.7374C13.2812 14.3587 12.7776 14.8624 12.1562 14.8624C11.5349 14.8624 11.0313 14.3587 11.0313 13.7374L11.0313 6.76562C11.0313 6.1443 11.5349 5.64062 12.1562 5.64062Z"
          fill={theme.colors[color] || color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5998_184091">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
