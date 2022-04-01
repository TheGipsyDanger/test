import * as React from 'react';

import { Wrapped, Spacing, Text, Conditional } from '~/components';
import { Card } from './Card';

import { IcClose, IcCheck } from '~/assets/svg';

import { IProfileCard, permissions } from '~/pages/MyInfosNavigator/My/data';

export const Permissions = ({ children }: IProfileCard) => (
  <Card>
    <Spacing space={4}>
      {permissions.map((item, index) => (
        <Wrapped key={item} flexDirection="row" center>
          <Wrapped
            mr={2}
            center
            borderRadius="circle"
            bg="inactive"
            width={24}
            height={24}>
            <Conditional render={index > 1}>
              <IcClose width={10} height={10} />
              <IcCheck color="text" width={10} height={10} />
            </Conditional>
          </Wrapped>
          <Wrapped flex={2} mr={2}>
            <Text variant="outback:h4">{item}</Text>
          </Wrapped>
        </Wrapped>
      ))}
    </Spacing>
    <Wrapped height={30} />
  </Card>
);
