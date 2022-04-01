import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path } from 'react-native-svg';

export const IcModalSuccess = ({
  color = '#0F853E',
  width = 24,
  height = 24,
}: ISvgIconProps) => {
  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <Path
        d="M32.3679 37.6297C31.7403 37.0021 30.8889 36.6494 30.0013 36.6494C29.1136 36.6494 28.2623 37.0021 27.6346 37.6297C27.0069 38.2574 26.6543 39.1087 26.6543 39.9964C26.6543 40.8841 27.0069 41.7354 27.6346 42.3631L37.6346 52.3631C37.9461 52.672 38.3155 52.9164 38.7216 53.0823C39.1277 53.2482 39.5626 53.3323 40.0013 53.3297C40.4576 53.3153 40.9061 53.2072 41.3189 53.0122C41.7318 52.8173 42.1002 52.5396 42.4013 52.1964L65.7346 25.5297C66.2734 24.8608 66.5332 24.0098 66.4598 23.154C66.3864 22.2982 65.9855 21.5038 65.3407 20.9364C64.6959 20.369 63.857 20.0724 62.9989 20.1084C62.1407 20.1444 61.3296 20.5103 60.7346 21.1297L40.0013 45.1297L32.3679 37.6297Z"
        fill={color}
      />
      <Path
        d="M70.0078 36.666C69.1238 36.666 68.2759 37.0172 67.6508 37.6423C67.0257 38.2674 66.6745 39.1153 66.6745 39.9993C66.6745 47.0718 63.865 53.8546 58.864 58.8555C53.8631 63.8565 47.0803 66.666 40.0078 66.666C34.7415 66.6636 29.5937 65.1019 25.2137 62.1778C20.8337 59.2537 17.4176 55.0982 15.3961 50.2352C13.3746 45.3723 12.8383 40.0197 13.8548 34.8523C14.8713 29.685 17.395 24.9343 21.1078 21.1993C23.5769 18.6973 26.5201 16.7128 29.7654 15.3621C33.0106 14.0113 36.4927 13.3214 40.0078 13.3327C42.1393 13.346 44.263 13.5919 46.3412 14.066C46.7761 14.2005 47.2339 14.2445 47.6864 14.1953C48.139 14.1461 48.5767 14.0048 48.9725 13.7799C49.3683 13.5551 49.7139 13.2516 49.9879 12.8881C50.2619 12.5246 50.4586 12.1088 50.5658 11.6664C50.673 11.224 50.6884 10.7643 50.6111 10.3157C50.5339 9.86707 50.3655 9.43904 50.1165 9.05799C49.8674 8.67693 49.543 8.35092 49.1631 8.10005C48.7833 7.84919 48.3561 7.67878 47.9078 7.59935C45.3183 6.99016 42.668 6.67704 40.0078 6.66602C33.4223 6.70023 26.9945 8.68442 21.5355 12.3682C16.0765 16.052 11.8311 21.2702 9.3349 27.3645C6.83873 33.4587 6.2037 40.1558 7.50996 46.6105C8.81621 53.0653 12.0052 58.9885 16.6745 63.6327C22.8635 69.8245 31.2533 73.3123 40.0078 73.3327C48.8484 73.3327 57.3269 69.8208 63.5781 63.5696C69.8293 57.3184 73.3412 48.8399 73.3412 39.9993C73.3412 39.1153 72.99 38.2674 72.3649 37.6423C71.7397 37.0172 70.8919 36.666 70.0078 36.666Z"
        fill={color}
      />
    </Svg>
  );
};
