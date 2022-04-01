import * as React from 'react';

import { Wrapped, Text } from '~/components';
import { Header } from './Header';
import { ReserveInfos } from './ReserveInfos';
import { ReserveOptions } from './ReserveOptions';
import { Bottom } from './Bottom';

import { IReserveResumeLayout } from '~/pages/OrdersNavigator/ReserveResume/data';

export const ReserveResume = (props: IReserveResumeLayout) => (
  <Wrapped flex={1} bg="background">
    <Header {...props} />
    <Wrapped mx={3} my={4}>
      <ReserveInfos {...props} />
      <ReserveOptions {...props} />
      <Bottom {...props} />
    </Wrapped>
  </Wrapped>
);
