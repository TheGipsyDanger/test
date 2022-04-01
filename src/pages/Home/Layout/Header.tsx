import * as React from 'react';
import { Image } from 'react-native';

import LOGO from '../../../../assets/logo.png';

import { Wrapped, Text } from '~/components';
import { Button } from './Button';
import { Address } from './Address';

export const Header = () => (
  <Wrapped
    bg="primary"
    height={40}
    justifyContent="flex-end"
    borderBottomLeftRadius="fullImageList"
    borderBottomRightRadius="fullImageList">
    <Wrapped center mb={4}>
      <Image
        resizeMode="contain"
        source={LOGO}
        style={{
          width: 89,
          height: 24,
        }}
      />
    </Wrapped>
    <Wrapped mx={3} mb={1} flexDirection="row" justifyContent="space-between">
      <Button width={100} label="Delivery" showIcon={true} />
      <Wrapped flexDirection="row">
        <Address />
        <Wrapped center>
          <Text ml={1} variant="outback:h3" color="white">
            Av. da Silva, Cristal ...
          </Text>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
