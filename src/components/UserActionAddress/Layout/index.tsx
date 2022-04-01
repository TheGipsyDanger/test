import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { ActionAddressDisplay } from '~/components/ActionAddressDisplay';

import { IUserActionAddressLayout } from '~/components/UserActionAddress/data';

export const UserActionAddress = ({
  t,
  data,
  pressAddress,
}: IUserActionAddressLayout) => {
  return (
    <FlatList
      data={data}
      extraData={data}
      ListHeaderComponent={() => (
        <Wrapped mx={3}>
          <Text variant="outback:h4" mb={4}>
            {t('ACTION.OUTBACK.DELIVERY.STEP_1.ADDRESS')}
          </Text>
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
