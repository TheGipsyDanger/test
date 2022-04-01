import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  BRLMoney,
  calculateTotal,
  prepareCartData,
  prepareToCart,
} from '~/utils';
import { useCart } from '~/context';

import { ICartResume } from '~/components/CartResume/data';
import { CartResume as Layout } from './Layout';

export const CartResume = (props: ICartResume) => {
  const { t } = useTranslation();
  const { itens, obs } = useCart();

  const insets = useSafeAreaInsets();

  const data = prepareToCart(itens);

  const layoutProps = {
    ...props,
    t,
    obs,
    top: insets.top,
    bottom: insets.bottom,
    data: prepareCartData(data),
    total: BRLMoney(calculateTotal(data) + 11.99),
  };

  return <Layout {...layoutProps} />;
};
