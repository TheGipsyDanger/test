import * as React from 'react';
import { Image } from 'react-native';

import { Wrapped, Text } from '~/components/Basics';
import { cleanCard } from '~/assets/images';

import { IMyCardsLayoutDontHaveCards } from '~/components/MyCards/data';

export const DontHaveCards = ({ t }: IMyCardsLayoutDontHaveCards) => (
  <Wrapped>
    <Wrapped alignSelf="center" width={181} height={103} mb={3}>
      <Image source={cleanCard} resizeMode="cover" />
    </Wrapped>
    <Wrapped mb={4}>
      <Text variant="outback:h5" textAlign="center">
        {t('PAYMENT.CARDS.CLEAN_MESSAGE')}
      </Text>
    </Wrapped>
  </Wrapped>
);
