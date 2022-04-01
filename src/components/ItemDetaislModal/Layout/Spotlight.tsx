import * as React from 'react';

import { Wrapped, Image } from '~/components/Basics';
import { Header } from '~/components/ItemDetaislModal/Layout/Header';

import { IItemModalSpotlight } from '~/components/ItemDetaislModal/data';

export const Spotlight = ({
  item,
  closeModal,
  setShowFullImage,
}: IItemModalSpotlight) => (
  <Wrapped onPress={() => setShowFullImage(true)}>
    <Image height={240} uri={item.image} />
    <Header
      firstFunction={closeModal}
      secondFunction={() => setShowFullImage(true)}
    />
  </Wrapped>
);
