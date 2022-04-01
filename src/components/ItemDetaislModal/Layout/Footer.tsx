import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { BottomSpotlight } from '~/components/BottomSpotlight';
import { IcMinus, IcPlus, IcBagButton } from '~/assets/svg';

import { IItemModalFooter } from '~/components/ItemDetaislModal/data';

const IconButton = ({ onPress, children }: any) => (
  <Wrapped onPress={onPress}>
    <Wrapped
      height={37}
      width={37}
      bg="background"
      boxShadow="card"
      borderRadius="circle"
      center>
      {children}
    </Wrapped>
  </Wrapped>
);

export const Footer = ({
  count,
  addCount,
  decreaseCount,
  addItemOnCart,
}: IItemModalFooter) => (
  <BottomSpotlight>
    <Wrapped center flex={1} mx={4} variant="outback:row">
      <Wrapped flex={1}>
        <Wrapped height={37} borderRadius="circle" variant="outback:row:center">
          <IconButton onPress={decreaseCount}>
            <IcMinus />
          </IconButton>
          <Wrapped mx={2}>
            <Text variant="outback:title">{count}</Text>
          </Wrapped>
          <IconButton onPress={addCount}>
            <IcPlus />
          </IconButton>
        </Wrapped>
      </Wrapped>
      <Wrapped flex={1}>
        <Wrapped onPress={() => (count > 0 ? addItemOnCart() : {})}>
          <Wrapped
            center
            boxShadow="button"
            height={37}
            borderRadius="circle"
            bg={count > 0 ? 'primary' : 'inactive'}>
            <Wrapped variant="outback:row">
              <IcBagButton />
              <Text ml={1} variant="outback:h4" color="moldals">
                Adicionar Item
              </Text>
            </Wrapped>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </BottomSpotlight>
);
