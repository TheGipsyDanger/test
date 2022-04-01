import * as React from 'react';

import { Wrapped, Text, OrderHeader } from '~/components';

import { IcArrowLeft } from '~/assets/svg';

import { IStatusLayoutHeader } from '~/pages/OrdersNavigator/Status/data';

export const Header = ({ goBack, t }: IStatusLayoutHeader) => {
  return (
    <Wrapped bg="primary" height={132} justifyContent="flex-end">
      <Wrapped mx={1} mb={4}>
        <Wrapped mx={4} mb={4}>
          <Wrapped
            hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}
            flexDirection="row"
            alignItems="center"
            onPress={goBack}
            justifyContent="space-between">
            <Wrapped>
              <IcArrowLeft color="modals" />
            </Wrapped>
            <Wrapped>
              <Text variant="outback:h7" color="modals">
                {t('MY_ORDERS.RESUME.HEADER')}
              </Text>
            </Wrapped>
            <Wrapped />
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
