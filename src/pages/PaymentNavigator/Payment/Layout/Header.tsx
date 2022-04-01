import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped, Text } from '~/components';
import { Button } from './Button';
import { Address } from './Address';

import { IcArrowLeft } from '~/assets/svg';

import { IPaymentLayoutHeader } from '~/pages/PaymentNavigator/Payment/data';

export const Header = ({ goBack, t }: IPaymentLayoutHeader) => {
  const insets = useSafeAreaInsets();
  return (
    <Wrapped
      bg="primary"
      height={insets.top + 112}
      justifyContent="flex-end"
      borderBottomLeftRadius="fullImageList"
      borderBottomRightRadius="fullImageList">
      <Wrapped mx={1}>
        <Wrapped mx={4} mb={4}>
          <Wrapped
            hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Wrapped onPress={goBack}>
              <IcArrowLeft color="modals" />
            </Wrapped>
            <Text variant="outback:h7" color="modals">
              {t('PAYMENT.CARDS.PAYMENT_FORM')}
            </Text>
            <Wrapped />
          </Wrapped>
        </Wrapped>
      </Wrapped>
      <Wrapped mx={4} mb={2} flexDirection="row" justifyContent="space-between">
        <Button width={100} label="Delivery" showIcon={true} />
        <Wrapped flexDirection="row">
          <Address />
          <Wrapped center>
            <Text ml={2} variant="outback:h3" color="white">
              Av. Loureiro da Silva, Cristal ...
            </Text>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
