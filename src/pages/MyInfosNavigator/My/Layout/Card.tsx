import * as React from 'react';

import { Wrapped } from '~/components';

import { IProfileCard } from '~/pages/MyInfosNavigator/My/data';

export const Card = ({ children }: IProfileCard) => (
  <Wrapped bg="modals" variant="outback:bottomRadius" px={3}>
    {children}
  </Wrapped>
);
