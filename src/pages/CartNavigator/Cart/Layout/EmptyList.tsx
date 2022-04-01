import * as React from 'react';

import { Text, Wrapped } from '~/components';

import { IcEmptyCart } from '~/assets/svg';

export const EmptyList = ({ t }: any) => (
  <Wrapped>
    <Wrapped mt={4} center>
      <IcEmptyCart />
      <Wrapped mt={2} mb={1} height={58}>
        <Text textAlign="center">{t('CART.STEP_1.EMPTY_LIST')}</Text>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
