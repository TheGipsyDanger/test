import * as React from 'react';
import { FlatList } from 'react-native';

import { ActionAddressDisplay, Wrapped } from '~/components';
import { IUserActionLayoutAddress } from '~/pages/UserActionNavigator/UserAction/data';

import S from './styles';

export const Address = ({
  t,
  addressData,
  pressAddress,
}: IUserActionLayoutAddress) => {
  return (
    <FlatList
      data={addressData}
      extraData={addressData}
      ListHeaderComponent={() => (
        <Wrapped mx={3}>
          <S.ContentTitle mb={4}>
            {t('ACTION.OUTBACK.DELIVERY.STEP_1.ADDRESS')}
          </S.ContentTitle>
        </Wrapped>
      )}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Wrapped mx={3} pb={2}>
          <ActionAddressDisplay
            onPress={() => pressAddress(index)}
            isSelected={item.isSelected}
          />
        </Wrapped>
      )}
    />
  );
};
