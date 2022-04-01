import * as React from 'react';

import { Wrapped, Text, Map as MapComponent } from '~/components';
import { IcSearchPlus } from '~/assets/svg';

export const Map = ({ openModal }: any) => (
  <Wrapped flex={1} mt={3}>
    <Wrapped flexDirection="row" center>
      <Wrapped opacity={0} mr={2} height={36} width={36}>
        <IcSearchPlus />
      </Wrapped>
      <Wrapped>
        <Text
          variant="outback:h7"
          mb={1}
          textAlign="center"
          color="primary">{`Outback Shopping Iguatemi`}</Text>
        <Text
          variant="outback:h3"
          mb={3}
          textAlign="center"
          color="primary">{`Av. Loureiro da Silva, 1670 - Belém Novo, Curitiba`}</Text>
      </Wrapped>
      <Wrapped onPress={openModal}>
        <Wrapped
          ml={2}
          height={36}
          width={36}
          bg="secondary"
          borderRadius="icon"
          center>
          <IcSearchPlus />
        </Wrapped>
      </Wrapped>
    </Wrapped>
    <Wrapped mx={0} borderRadius="card" height={320} overflow="hidden">
      <MapComponent size={40} indicator="outback" />
    </Wrapped>
  </Wrapped>
);
