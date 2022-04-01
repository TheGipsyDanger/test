import * as React from 'react';

import { Wrapped } from '~/components/Basics';

import { metrics } from '~/styles';

import { IBottomSpotlightLayout } from '~/components/BottomSpotlight/data';

export const BottomSpotlight = ({
  bottom,
  children,
}: IBottomSpotlightLayout) => (
  <Wrapped
    bg="moldals"
    position="absolute"
    bottom={0}
    right={0}
    left={0}
    boxShadow="bottomSpotlight"
    height={metrics.bottomSpotlight + bottom}
    borderTopLeftRadius="card"
    borderTopRightRadius="card"
    testID={`BottomSpotlight`}>
    {children}
  </Wrapped>
);
