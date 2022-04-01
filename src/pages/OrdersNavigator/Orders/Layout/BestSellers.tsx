import * as React from 'react';

import { Image, Text, Wrapped } from '~/components/Basics';

import { useModal } from '~/context';

import { IListLayout } from '~/components/List/data';

export const BestSellers = () => {
  const { openModal } = useModal();
  return (
    <Wrapped
      testID={'List:Menu.BestSellers'}
      mr={2}
      mb={2}
      width={212}
      bg="moldals"
      shadow="list"
      flexDirection="row"
      borderRadius="fullImageList">
      <Wrapped flex={1} justifyContent="center" pl={3}>
        <Text variant="outback:body" mb={0}>{`Toowomba\nPasta`}</Text>
        <Text variant="outback:h2" mb={0}>{`R$ 68,50`}</Text>
        <Wrapped onPress={() => openModal('ItemDetaislModal')}>
          <Wrapped
            bg="primary"
            height={20}
            width={80}
            borderRadius="button"
            center>
            <Text variant="outback:h3" color="white">
              Adicionar
            </Text>
          </Wrapped>
        </Wrapped>
      </Wrapped>
      <Wrapped>
        <Image
          borderRadius="fullImageList"
          width={100}
          height={100}
          uri="https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg"
        />
      </Wrapped>
    </Wrapped>
  );
};
