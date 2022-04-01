import * as React from 'react';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LOGO from '../../../../../assets/logo.png';

import { Wrapped } from '~/components';

export const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <Wrapped
      bg="primary"
      height={insets.top + (112 - insets.top)}
      borderBottomLeftRadius="fullImageList"
      borderBottomRightRadius="fullImageList">
      <Wrapped center mb={4}>
        <Image
          resizeMode="contain"
          source={LOGO}
          style={{
            top: insets.top,
            width: 89,
            height: 24,
          }}
        />
      </Wrapped>
    </Wrapped>
  );
};
