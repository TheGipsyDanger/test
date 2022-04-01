import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ModalContainer, Wrapped, Map, Text } from '~/components';
import { equivalent } from '~/utils';
import { metrics } from '~/styles/metrics';

import { IcArrowLeft } from '~/assets/svg';

import { IMapModalLayout } from '~/pages/UserActionNavigator/MapModal/data';

export const MapModal = ({ goBack }: IMapModalLayout) => (
  <Wrapped flex={1} bg="primary" justifyContent="flex-end">
    <ModalContainer size={92} variant="outback:topRadius" hasSafeArea={false}>
      <Wrapped center>
        <Text mb={1} variant="outback:h7" color="primary">
          Outback shopping Iguatemi
        </Text>
        <Text mb={3} variant="outback:h4" color="primary">
          Av. Loureiro da Silva, 1670, Belém Novo, Curitiba
        </Text>
      </Wrapped>
      <Wrapped
        mx={0}
        borderRadius="card"
        height={equivalent(metrics.height, 92)}
        overflow="hidden">
        <Map size={92} indicator="outback" />
      </Wrapped>
    </ModalContainer>
    <Wrapped position="absolute" top={useSafeAreaInsets().top} left={30}>
      <Wrapped
        onPress={goBack}
        hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}>
        <IcArrowLeft color="modals" />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
