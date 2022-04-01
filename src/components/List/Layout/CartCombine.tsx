import * as React from 'react';

import { Wrapped, Image, Text, Conditional } from '~/components/Basics';
import { IcPlus, IcCheck } from '~/assets/svg';

import { IListLayoutCombine } from '~/components/List/data';

export const CartCombine = ({
  index,
  isSelected,
  onPress,
}: IListLayoutCombine) => (
  <Wrapped
    testID="List:Menu.Item"
    variant="outback:card"
    bg="moldals"
    borderRadius="card"
    maxWidth={128}
    p={1}
    mb={2}
    mr={1}>
    <Image
      borderRadius="imageList"
      width={108}
      height={80}
      uri="https://i.ibb.co/0jRkPb8/image-64.png"
    />
    <Wrapped mt={1}>
      <Text variant="outback:body" color="text">
        Outback Jack Nachos
      </Text>
    </Wrapped>
    <Wrapped mt={0} variant="outback:row:center" justifyContent="space-between">
      <Text variant="outback:body" color="text">
        R$ 45,60
      </Text>
      <Wrapped onPress={() => onPress(index)}>
        <Wrapped
          height={24}
          width={24}
          bg={isSelected ? 'primary' : 'secondary'}
          borderRadius="circle"
          center>
          <Conditional render={isSelected}>
            <IcCheck color="#fefefe" />
            <IcPlus color="#fefefe" />
          </Conditional>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
