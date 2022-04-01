import * as React from 'react';
import { FlatList } from 'react-native';

import { ActionTypeDisplay, Wrapped } from '~/components';
import { IUserActionLayoutType } from '~/pages/UserActionNavigator/UserAction/data';

export const Types = ({ pressType, types }: IUserActionLayoutType) => (
  <FlatList
    data={types}
    extraData={types}
    keyExtractor={(_, index) => index.toString()}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    horizontal={true}
    renderItem={({ item, index }) => {
      const customProps = index === 0 ? { ml: 3 } : {};
      return (
        <Wrapped {...{ ...customProps }} mr={3} py={4}>
          <ActionTypeDisplay
            onPress={() => pressType(index)}
            isSelected={item.isSelected}
            type={item.type}
          />
        </Wrapped>
      );
    }}
  />
);
