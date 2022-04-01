import * as React from 'react';
import { ImageBackground } from 'react-native';

import { Text, Wrapped } from '~/components/Basics';
import { emptyBg } from '~/assets/images';
import { IcRequests } from '~/assets/svg';

import { IOrdersLayoutEmpty } from '~/pages/OrdersNavigator/Orders/data';

export const Empty = ({ t }: IOrdersLayoutEmpty) => (
  <ImageBackground style={{ flex: 1 }} source={emptyBg}>
    <Wrapped flex={1} testID={'Empty'} center>
      <Wrapped mb={1}>
        <IcRequests />
      </Wrapped>
      <Text variant="outback:desk" textAlign="center" mb={3}>
        {t('MY_ORDERS.EMPTY_TITLE')}
      </Text>
      <Text variant="outback:body" textAlign="center">
        {t('MY_ORDERS.EMPTY_DESCRIPTION')}
      </Text>
      {[...Array(5).keys()].map((item) => (
        <Wrapped mb={4} key={item} />
      ))}
    </Wrapped>
  </ImageBackground>
);
