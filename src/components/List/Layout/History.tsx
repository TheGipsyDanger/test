import * as React from 'react';

import { Button, Text, Wrapped } from '~/components/Basics';

import { IListLayout } from '~/components/List/data';

export const History = ({ t }: any) => {
  return (
    <Wrapped
      testID={'List:Menu.History'}
      bg="moldals"
      shadow="list"
      justifyContent="center"
      borderRadius="card"
      p={3}
      mb={3}>
      <Wrapped mb={3} variant="outback:row" justifyContent="space-between">
        <Text variant="outback:h3">Pedido nº 2558</Text>
        <Text variant="outback:h3">R$ 250,00</Text>
      </Wrapped>
      <Wrapped mb={2}>
        <Text variant="outback:desk" numberOfLines={1}>
          Jackaroo Ribs And Steak
        </Text>
      </Wrapped>
      <Wrapped mb={3}>
        <Text variant="outback:h4" mb={0}>
          Qua, 07 de outubro de 2021
        </Text>
        <Wrapped flexDirection="row" alignItems="center">
          <Text variant="outback:h4">Entrega</Text>
          <Wrapped ml={4} width={22} height={14} bg="red" />
          <Text ml={0} variant="outback:h4">
            1567
          </Text>
        </Wrapped>
      </Wrapped>
      <Wrapped mb={2} height={1} bg="inactive" />
      <Wrapped
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Wrapped onPress={() => alert('ajuda')}>
          <Text variant="outback:h4" color="primary">
            Ajuda
          </Text>
        </Wrapped>
        <Wrapped width={166}>
          <Button
            height={37}
            onPress={() => alert('pedir novamente')}
            textVariant="outback:h4"
            text={'Pedir novamente'}
          />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
