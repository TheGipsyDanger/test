import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Text } from '~/components';
import { History } from './History';
import { BestSellers } from './BestSellers';

import { IOrdersLayoutLists } from '~/pages/OrdersNavigator/Orders/data';

export const Lists = (props: IOrdersLayoutLists) => {
  const { data, openOrderDetails } = props;
  return (
    <Wrapped flex={1} mx={3}>
      <FlatList
        data={[{}]}
        extraData={[{}]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <Wrapped>
            <Text mt={4} mb={3} variant="outback:h4">{`Mais recentes`}</Text>
            <FlatList
              horizontal
              data={data}
              extraData={data}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={() => <BestSellers />}
            />
            <Text mt={4} mb={3} variant="outback:h4">{`Histórico`}</Text>
            <FlatList
              data={data}
              extraData={data}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={() => (
                <Wrapped onPress={() => openOrderDetails('1')}>
                  <History {...props} />
                </Wrapped>
              )}
            />
          </Wrapped>
        )}
      />
    </Wrapped>
  );
};
