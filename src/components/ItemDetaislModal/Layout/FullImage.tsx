import * as React from 'react';
import { Image, View } from 'react-native';

import { Wrapped } from '~/components/Basics';
import { Header } from '~/components/ItemDetaislModal/Layout/Header';

import { IItemModalFullImage } from '~/components/ItemDetaislModal/data';
import { metrics } from '~/styles';

export const FullImage = ({ setShowFullImage, item }: IItemModalFullImage) => (
  <Wrapped flex={1} center>
    <Image
      source={{ uri: item.image }}
      style={{
        width: metrics.height,
        height: metrics.width,
        transform: [
          {
            rotate: '-90deg',
          },
        ],
      }}
    />
    <Header firstFunction={() => setShowFullImage(false)} />
  </Wrapped>
);
