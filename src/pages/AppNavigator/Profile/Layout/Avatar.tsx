import * as React from 'react';

import { Wrapped, Text } from '~/components';

import { IProfileCard } from '~/pages/AppNavigator/Profile/data';

export const Avatar = ({ children }: IProfileCard) => (
  <Wrapped mb={4}>
    <Wrapped center mb={2}>
      <Wrapped
        mb={2}
        bg="modals"
        borderRadius="circle"
        height={80}
        width={80}
      />
      <Text variant="outback:desk">{'Nome da pessoa'}</Text>
    </Wrapped>
  </Wrapped>
);
