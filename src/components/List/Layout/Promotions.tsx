import * as React from 'react';

import { Wrapped, Image } from '~/components/Basics';

import { useModal } from '~/context';

export const Promotions = () => {
  const { openModal } = useModal();
  return (
    <Wrapped onPress={() => openModal('ItemDetaislModal')}>
      <Wrapped
        testID={'List:Menu.Promotions'}
        mr={2}
        mb={2}
        bg="red"
        shadow="list"
        borderRadius="fullImageList">
        <Image
          borderRadius="fullImageList"
          width={212}
          height={100}
          uri="https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg"
        />
      </Wrapped>
    </Wrapped>
  );
};
