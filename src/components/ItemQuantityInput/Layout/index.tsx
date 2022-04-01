import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { IcMinus, IcPlus } from '~/assets/svg';
import { BRLMoney } from '~/utils';

import { IItemQuantityInputLayout } from '~/components/ItemQuantityInput/data';

const Icon = ({ children, onPress }: any) => (
  <Wrapped
    {...{ onPress }}
    hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}>
    {children}
  </Wrapped>
);

export const ItemQuantityInput = ({
  item,
  count,
  addCount,
  decreaseCount,
}: IItemQuantityInputLayout) => (
  <Wrapped
    p={2}
    pl={3}
    bg="moldals"
    borderRadius="circle"
    variant="outback:card:row:center"
    justifyContent="space-between">
    <Text variant="outback:h2">{item.name}</Text>
    <Wrapped variant="outback:row:center">
      <Text mr={3} variant="outback:h5">{`+ ${BRLMoney(item.price)}`}</Text>
      <Wrapped
        px={1}
        justifyContent="space-between"
        bg="background"
        height={28}
        borderRadius="circle"
        variant="outback:row:center">
        <Icon onPress={decreaseCount}>
          <Wrapped height={24} center>
            <IcMinus />
          </Wrapped>
        </Icon>
        <Wrapped mx={4}>
          <Text variant="outback:h2">{count}</Text>
        </Wrapped>
        <Icon onPress={addCount}>
          <Wrapped height={24} center>
            <IcPlus />
          </Wrapped>
        </Icon>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
