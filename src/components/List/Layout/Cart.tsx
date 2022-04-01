import * as React from 'react';

import { Wrapped, Image, Text } from '~/components/Basics';
import { ItemBagQuantityInput } from '~/components/ItemBagQuantityInput';

export const Cart = (props: any) => {
  const { id, name, description, amount, image, price } = props;
  return (
    <Wrapped
      {...(props.last ? { mb: 0 } : { mb: 3 })}
      mx={4}
      height={96}
      p={1}
      justifyContent="space-between"
      bg="moldals"
      shadow="list"
      flexDirection="row"
      borderRadius="fullImageList">
      <Image
        borderRadius="fullImageCategoryList"
        width={88}
        height={78}
        uri={image}
      />
      <Wrapped flex={1} pl={2} pr={1} justifyContent="space-between">
        <Text variant="outback:h3" numberOfLines={1}>
          {name}
        </Text>
        <Text variant="outback:h6" numberOfLines={2}>
          {description === ''
            ? 'Alface, brócolis, cenroura, carne, cebolinha, agrião, cebolas em tiras'
            : description}
        </Text>
        <Wrapped
          flexDirection={'row'}
          justifyContent="space-between"
          alignItems="center">
          <Text variant="outback:tabBar">{price}</Text>
          <ItemBagQuantityInput {...{ id, amount }} />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
