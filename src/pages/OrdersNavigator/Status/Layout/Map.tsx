import * as React from 'react';

import { Wrapped, Text, Map as MapComponent } from '~/components';

export const Map = (props: any) => (
  <Wrapped flex={1}>
    <Wrapped mx={0} borderRadius="card" height={300} overflow="hidden">
      <MapComponent size={36} indicator="outback" />
    </Wrapped>
    <Wrapped
      bg="background"
      position={'absolute'}
      px={2}
      py={1}
      mx={4}
      left={0}
      right={0}
      bottom={10}
      borderRadius="card">
      <Text
        variant="outback:h8"
        numberOfLines={1}
        mb={0}>{`Outback Shopping Iguatemi Porto Alegre`}</Text>
      <Text
        numberOfLines={
          1
        }>{`Av. João Wallig, 1800 - Loja 2252 - Passo d'Areia, Porto...`}</Text>
    </Wrapped>
  </Wrapped>
);
