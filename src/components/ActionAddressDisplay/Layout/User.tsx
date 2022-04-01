import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { IcHouse, IcArrowRight } from '~/assets/svg';

import { IActionAddressDisplayLayout } from '~/components/ActionAddressDisplay/data';

import S from './styles';

export const User = (props: any) => (
  <S.OtherContainer bg="background" height={100}>
    <Wrapped flex={1} justifyContent="center">
      <Wrapped mb={1} flexDirection="row">
        <IcHouse />
        <Text variant="outback:h2">Casa</Text>
        <Wrapped flex={1}>
          <Wrapped flexDirection="row" justifyContent="flex-end">
            <Text variant="outback:body" mr={1}>
              Alterar
            </Text>
            <IcArrowRight />
          </Wrapped>
        </Wrapped>
      </Wrapped>
      <Wrapped>
        <Text variant="outback:h5">{`Av. Loureiro da Silva, 1670 - 302\nBelém Novo, Curitiba - 90090-008`}</Text>
      </Wrapped>
    </Wrapped>
  </S.OtherContainer>
);
