import * as React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped, Text } from '~/components';

import { IcArrowLeft } from '~/assets/svg';

import { IReserveResumeLayoutHeader } from '~/pages/OrdersNavigator/ReserveResume/data';

export const Header = ({ goBack, t }: IReserveResumeLayoutHeader) => {
  return (
    <Wrapped
      bg="primary"
      height={132}
      borderBottomLeftRadius="fullImageList"
      borderBottomRightRadius="fullImageList"
      pt={`${
        Platform.OS === 'android'
          ? useSafeAreaInsets().top + 25
          : useSafeAreaInsets().top
      }px`}>
      <Wrapped mx={1} mb={4}>
        <Wrapped mx={4}>
          <Wrapped
            hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}
            flexDirection="row"
            justifyContent="space-between">
            <Wrapped onPress={goBack}>
              <IcArrowLeft color="modals" />
            </Wrapped>
            <Wrapped>
              <Text variant="outback:h7" color="modals" textAlign="center">
                {`Fernanda,\nacompanhe sua reserva`}
              </Text>
            </Wrapped>
            <Wrapped />
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
