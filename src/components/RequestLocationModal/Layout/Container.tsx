import * as React from 'react';

import { Wrapped } from '~/components/Basics';
import { IcModalBottom } from '~/assets/svg';
import { equivalent } from '~/utils';

import { IRequestLocatioContainerLayout } from '~/components/RequestLocationModal/data';

export const Container = ({
  children,
  modalSizes: { height },
}: IRequestLocatioContainerLayout) => {
  return (
    <Wrapped
      px={1}
      height={equivalent(height, 74)}
      testID={`RequestLocationModal:Welcome`}>
      <Wrapped flex={1} bg="modals" variant="outback:topRadius">
        {children}
        <Wrapped
          left={0}
          right={0}
          position="absolute"
          overflow="hidden"
          bottom={0}>
          <IcModalBottom />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
