import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IProgressBarLayout } from '~/components/ProgressBar/data';

export const ProgressBar = ({
  percentage = 50,
  height = 4,
  bg = 'inactive',
  fill = 'primary',
}: IProgressBarLayout) => (
  <Wrapped>
    <Wrapped height={height} width={`100%`} bg={bg} borderRadius="circle" />
    <Wrapped
      height={height}
      width={`${percentage}%`}
      bg={fill}
      position="absolute"
      borderRadius="circle"
    />
  </Wrapped>
);
