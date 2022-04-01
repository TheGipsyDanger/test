import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { IcLocalization, IcArrowRight } from '~/assets/svg';

import { IActionAddressDisplayLayout } from '~/components/ActionAddressDisplay/data';

import S from './styles';

export const Store = (props: any) => (
  <S.OtherContainer bg="background" height={120} center>
    <Wrapped flex={1}>
      <Wrapped mb={0} flexDirection="row">
        <Text color="text" variant="outback:desk">{`Outback Iguatemi`}</Text>
        <Wrapped
          flex={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end">
          <Text variant="outback:body" mr={1}>
            Alterar
          </Text>
          <IcArrowRight />
        </Wrapped>
      </Wrapped>
      <Wrapped variant="outback:card:row:center" mb={0}>
        <IcLocalization width={16} height={20} />
        <Text ml={0} color="text">{`500m`}</Text>
      </Wrapped>
      <Text
        variant="outback:h5"
        color="text">{`Av. Loureiro da Silva, 1670 - 302\nBelém Novo, Curitiba - 90090-008`}</Text>
    </Wrapped>
  </S.OtherContainer>
);
