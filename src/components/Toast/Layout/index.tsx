import * as React from 'react';

import { Wrapped } from '~/components/Basics';
import { metrics } from '~/styles';

import { IToastLayout } from '~/components/Toast/data';

export const Toast = ({ children, bottom, onPress }: IToastLayout) => {
  return (
    <Wrapped center testID={`Toast`}>
      <Wrapped
        position="absolute"
        bg="active"
        zIndex={205}
        width={metrics.dimensionWidth - 50}
        top={-(metrics.bottomSpotlight + bottom + 35 / 1.2)}
        height={35}
        borderRadius="card">
        <Wrapped flex={1} {...{ onPress }}>
          <Wrapped flex={1} px={2}>
            {children}
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
