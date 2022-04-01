import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useCart } from '~/context';
import { prepareToCart, BRLMoney } from '~/utils';

import { ICart } from '~/pages/AppNavigator/Cart/data';
import { Cart as Layout } from './Layout';

export const Cart = (props: ICart) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const [isOpened, setIsOpened] = React.useState(true);

  const { itens, obs, updateObs } = useCart();

  const [toggle, setToogle] = useState<boolean>(false);

  function add() {
    navigate('Menu');
  }

  const data = prepareToCart(itens).map((item) => ({
    ...item,
    price: BRLMoney(item.productStore.price),
  }));

  const layoutProps = {
    ...props,
    t,
    add,
    toggle,
    setToogle,
    isOpened,
    setIsOpened,
    itens: data,
    obs,
    updateObs,
  };

  return <Layout {...layoutProps} />;
};
