import * as React from 'react';
import { Platform } from 'react-native';

import { Wrapped, Text } from '~/components/Basics';

import { IcArrowLeft } from '~/assets/svg';

import { IProfileLayoutHeader } from '~/pages/MyInfosNavigator/My/data';

export const Header = ({ goBack, t }: IProfileLayoutHeader) => {
  return (
    <Wrapped
      bg="primary"
      height={132}
      justifyContent={Platform.OS === 'ios' ? 'flex-end' : 'center'}>
      <Wrapped mx={1} mb={4}>
        <Wrapped mx={4} mb={4}>
          <Wrapped
            hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Wrapped onPress={goBack}>
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
