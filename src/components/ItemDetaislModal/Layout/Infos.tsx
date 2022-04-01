import * as React from 'react';

import { BRLMoney } from '~/utils';

import { Wrapped, Text, Spacing } from '~/components/Basics';
import { IcShare, IcLeaf } from '~/assets/svg';
import { IItemModalInfos } from '~/components/ItemDetaislModal/data';

import S from './styles';

export const Infos = ({ item }: IItemModalInfos) => (
  <Wrapped>
    <Wrapped flexDirection="row" justifyContent="space-between" mb={3}>
      <Wrapped flex={1}>
        <Text variant="outback:title" numberOfLines={2}>
          {item.name}
        </Text>
      </Wrapped>
      <Wrapped>
        <Text variant="outback:title">
          {BRLMoney(item.productStore?.price as number)}
        </Text>
      </Wrapped>
    </Wrapped>
    <Wrapped mb={4}>
      <Text variant="outback:body">{item.description}</Text>
    </Wrapped>
    <Wrapped flexDirection="row" justifyContent="space-between">
      <Wrapped flex={1}>
        <Spacing space={1}>
          <Wrapped variant="outback:row" alignItems="center">
            <IcShare />
            <Text ml={0} variant="outback:h4" color="primary">
              Para Compartilhar
            </Text>
          </Wrapped>
          <Wrapped variant="outback:row" alignItems="center">
            <IcLeaf />
            <Text ml={0} variant="outback:h4" color="success">
              Origem Vegetal
            </Text>
          </Wrapped>
        </Spacing>
      </Wrapped>
      <Wrapped flexDirection="row">
        <S.Icon mr={0} />
        <S.Icon mr={0} />
        <S.Icon mr={0} />
        <S.Icon />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
