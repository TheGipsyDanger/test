import * as React from 'react';

import { Wrapped, Text, Conditional } from '~/components/Basics';
import { IcTrash, IcPlus, IcMinus } from '~/assets/svg';

import { IItemBagQuantityInputLayout } from '~/components/ItemBagQuantityInput/data';

const Icon = ({ children, onPress }: any) => (
  <Wrapped
    {...{ onPress }}
    hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}>
    {children}
  </Wrapped>
);

export const ItemBagQuantityInput = ({
  count,
  addCount,
  decreaseCount,
}: IItemBagQuantityInputLayout) => (
  <Wrapped variant="outback:row:center">
    <Wrapped
      px={1}
      justifyContent="space-between"
      bg="background"
      height={28}
      borderRadius="circle"
      variant="outback:row:center">
      <Icon onPress={decreaseCount}>
        <Wrapped height={24} center>
          <Conditional render={count === 1}>
            <IcTrash />
            <IcMinus />
          </Conditional>
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
);
