import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { ISelectorLayout } from '~/components/Selector/data';

export const Selector = ({ data, action }: ISelectorLayout) => (
  <Wrapped
    height={40}
    bg="background"
    borderRadius="button"
    testID={`Selector`}>
    <Wrapped flex={1} p={0} flexDirection="row">
      {data.map((item, index) => (
        <Wrapped
          center
          flex={1}
          key={index}
          onPress={() => action(index)}
          borderRadius="tiny"
          bg={item.isActive ? 'primary' : 'background'}>
          <Text color={item.isActive ? 'modals' : 'text'}>{item.label}</Text>
        </Wrapped>
      ))}
    </Wrapped>
  </Wrapped>
);
