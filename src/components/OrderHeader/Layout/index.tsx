import * as React from 'react';

import { Wrapped, Text, Conditional } from '~/components/Basics';
import { HeaderOrdersList } from '~/components/HeaderOrdersList';

import { IcArrowLeft } from '~/assets/svg';

import { IOrderHeaderLayout } from '~/components/OrderHeader/data';

export const OrderHeader = ({
  t,
  mt,
  label,
  goBack,
  insetsTop,
  modalHeader,
  hasList = true,
  type = 'default',
}: IOrderHeaderLayout) => {
  return (
    <Conditional render={type === 'default'}>
      <Wrapped>
        <Wrapped
          bg="primary"
          height={modalHeader}
          borderBottomLeftRadius="fullImageList"
          borderBottomRightRadius="fullImageList"
          justifyContent="flex-end">
          <Wrapped flex={1} mt={`${mt}px`}>
            <Text variant="outback:h7" textAlign="center" color="modals">
              {label}
            </Text>
          </Wrapped>
          <Conditional render={hasList}>
            <Wrapped>
              <HeaderOrdersList />
            </Wrapped>
          </Conditional>
        </Wrapped>
      </Wrapped>
      <Wrapped
        bg="primary"
        minHeight={insetsTop + 129}
        borderBottomLeftRadius="fullImageList"
        borderBottomRightRadius="fullImageList">
        <Wrapped>
          <Wrapped>
            <Wrapped mt={`${mt}px`}>
              <Text
                mb={1}
                variant="outback:h8"
                color="modals"
                textAlign="center">
                {label}
              </Text>
              <Text
                mb={4}
                color="modals"
                variant="outback:title"
                textAlign="center">{`21:50 - 22:10`}</Text>
              <Text
                color="modals"
                variant="outback:h8"
                textAlign="center">{`Pedido #2345`}</Text>
            </Wrapped>
            <Wrapped />
          </Wrapped>
          <Wrapped position="absolute" top={mt} left={30}>
            <Wrapped
              onPress={goBack}
              hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}>
              <IcArrowLeft color="modals" />
            </Wrapped>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Conditional>
  );
};
