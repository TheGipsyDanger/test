import * as React from 'react';

import { Wrapped, Spacing, Text } from '~/components';
import { Card } from './Card';

import { IProfileOptionsLayout } from '~/pages/MyInfosNavigator/My/data';

export const Optional = ({ profileOptions }: IProfileOptionsLayout) => (
  <Card>
    <Spacing space={3}>
      {profileOptions.map((item) => (
        <Wrapped key={item.label}>
          <Text mb={0} variant="outback:tabBar">
            {item.label}
          </Text>
          <Text variant="outback:h4">{item.value}</Text>
        </Wrapped>
      ))}
    </Spacing>
    <Wrapped height={30} />
  </Card>
);
