import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { CardCaroussel } from '~/components/CardCaroussel';

import { IMyCardsLayoutCards } from '~/components/MyCards/data';

export const Cards = ({ t, cardPrincipal }: IMyCardsLayoutCards) => {
  return (
    <Wrapped my={4} boxShadow="paymentWrapped">
      <Wrapped height={103} mb={3}>
        <CardCaroussel />
      </Wrapped>
      <Wrapped>
        <Text variant="outback:body" textAlign="center">
          {cardPrincipal ? cardPrincipal : 'Meu <3 por comida'}
        </Text>
      </Wrapped>
    </Wrapped>
  );
};
