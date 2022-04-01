import * as React from 'react';

import { Wrapped } from '~/components/Basics';
import { PulseIndicator } from 'react-native-indicators';

import { ILoadingModalLayout } from '~/components/LoadingModal/data';

export const LoadingModal = ({ data }: ILoadingModalLayout) => (
  <Wrapped testID={`LoadingModal`}>
    <Wrapped height={'100%'} center>
      <PulseIndicator color="#FFF" size={120} />
    </Wrapped>
  </Wrapped>
);
