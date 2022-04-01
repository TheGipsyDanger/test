import * as React from 'react';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LOGO from '../../../../../assets/logo.png';

import { Wrapped, Text } from '~/components';
import { Button } from './Button';
import { Address } from './Address';

export const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <Wrapped
      bg="primary"
      height={insets.top + 112}
      justifyContent="flex-end"
      borderBottomLeftRadius="fullImageList"
      borderBottomRightRadius="fullImageList">
      <Wrapped center mb={4}>
        <Text variant="outback:h2" color="white">
          Sacola
        </Text>
      </Wrapped>
      <Wrapped mx={4} mb={2} flexDirection="row" justifyContent="space-between">
        <Button
          variant="outback:disabled"
          height={55}
          onPress={() => {}}
          textVariant="outback:h2"
          text={'CART.RESUME.BTN'}
        />
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
