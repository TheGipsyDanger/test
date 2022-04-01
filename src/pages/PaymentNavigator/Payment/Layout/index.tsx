import * as React from 'react';
import { ScrollView, FlatList } from 'react-native';

import {
  Spacing,
  MyCards,
  Wrapped,
  DeliveryIn,
  CartResumeModal,
} from '~/components';
import { Header } from './Header';
import { IPaymentLayout } from '~/pages/PaymentNavigator/Payment/data';

export const Payment = (props: IPaymentLayout) => (
  <Wrapped flex={1} testID={`Payment`}>
    <Header {...props} />
    <FlatList
      data={[{}]}
      extraData={[{}]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ _ }) => (
        <Wrapped mx={3} mt={3} pb={2}>
          <Spacing space={3}>
            <MyCards />
            <DeliveryIn />
          </Spacing>
        </Wrapped>
      )}
    />
    <Wrapped height={154} />
    <CartResumeModal where="payment" />
  </Wrapped>
);
