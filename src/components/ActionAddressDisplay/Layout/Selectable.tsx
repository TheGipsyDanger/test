import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { IcLocalization, IcCheck } from '~/assets/svg';

import {
  IActionAddressDisplayLayout,
  IActionAddressDisplayLayoutText,
} from '~/components/ActionAddressDisplay/data';

import S from './styles';

const T = ({
  children,
  isSelected,
  ...props
}: IActionAddressDisplayLayoutText) => (
  <Text color={isSelected ? 'white' : 'text'} {...props}>
    {children}
  </Text>
);

export const Selectable = ({
  isSelected = false,
}: IActionAddressDisplayLayout) => (
  <S.Container bg={isSelected ? 'primary' : 'background'}>
    <Wrapped>
      <T
        {...{ isSelected, mb: 0 }}
        variant="outback:desk">{`Outback Iguatemi`}</T>
      <Wrapped variant="outback:card:row:center" mb={0}>
        <IcLocalization
          width={16}
          height={20}
          color={isSelected ? 'white' : undefined}
        />
        <T {...{ isSelected, ml: 0 }}>{`500m`}</T>
      </Wrapped>
      <T
        variant="outback:h5"
        {...{
          isSelected,
        }}>{`Av. Loureiro da Silva, 1670 - 302\nBelém Novo, Curitiba - 90090-008`}</T>
    </Wrapped>
    <Wrapped center height={'100%'}>
      <S.IconContainer bg={isSelected ? 'white' : 'modals'}>
        <IcCheck color={isSelected ? 'primary' : 'inactive'} />
      </S.IconContainer>
    </Wrapped>
  </S.Container>
);
