import * as React from 'react';
import { Image } from 'react-native';

import { Wrapped, Text } from '~/components';

import { IProfileLayoutAvatar } from '~/pages/MyInfosNavigator/My/data';

export const Avatar = ({ user }: IProfileLayoutAvatar) => (
  <Wrapped mb={4}>
    <Wrapped center mb={2}>
      <Wrapped center mb={2}>
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 3,
            borderColor: '#A00F2D',
          }}
          resizeMode="stretch"
          source={{
            uri: 'https://user-images.githubusercontent.com/22872282/159062164-ed9b5ec1-0668-4008-96e1-8b565346c6ed.png',
          }}
        />
      </Wrapped>
      <Text variant="outback:desk">{'Renan Henrique'}</Text>
    </Wrapped>
  </Wrapped>
);
