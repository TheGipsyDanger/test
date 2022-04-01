import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped, Text } from '~/components';

import { IcArrowLeft } from '~/assets/svg';

import { IProfileLayoutHeader } from '~/pages/MyInfosNavigator/My/data';

export const Header = ({ goBack, t }: IProfileLayoutHeader) => {
  const insets = useSafeAreaInsets();
  return (
    <Wrapped bg="primary" height={112} justifyContent="flex-end">
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
              {t('PROFILE.MY.HEADER')}
            </Text>
            <Wrapped />
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
