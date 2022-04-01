import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Text } from '~/components/Basics';
import { ProgressBar } from '~/components/ProgressBar';
import { metrics } from '~/styles';

import { IcMapLocationOrder } from '~/assets/svg';

import { IHeaderOrdersListLayout } from '~/components/HeaderOrdersList/data';

export const HeaderOrdersList = ({
  data = [{}, {}, {}],
  openResume,
}: IHeaderOrdersListLayout) => (
  <FlatList
    horizontal
    data={data}
    extraData={data}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item }) => (
      <Wrapped onPress={openResume}>
        <Wrapped width={metrics.width}>
          <Wrapped
            minHeight={144}
            bg="modals"
            mx={3}
            mb={4}
            p={2}
            borderRadius="card">
            <Wrapped center mb={1}>
              <Text mb={0} variant="outback:h8">{`Previsão de entrega`}</Text>
              <Text variant="outback:title">{`21:50 - 22:10`}</Text>
            </Wrapped>
            <Wrapped flexDirection="row">
              <Wrapped mr={1}>
                <IcMapLocationOrder />
              </Wrapped>
              <Wrapped flex={1} justifyContent="center">
                <Text mb={0} variant="outback:h8">{`Pedido #2345`}</Text>
                <Wrapped>
                  <Text
                    mb={0}
                    color="primary"
                    size={'h4'}
                    font="bold">{`Em produção`}</Text>
                  <ProgressBar height={3} />
                </Wrapped>
              </Wrapped>
            </Wrapped>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    )}
  />
);
