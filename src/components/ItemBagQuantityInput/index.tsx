import * as React from 'react';

import { useCart } from '~/context';
import { IUpdateType } from '~/utils';

import { IItemBagQuantityInput } from '~/components/ItemBagQuantityInput/data';
import { ItemBagQuantityInput as Layout } from './Layout';

export const ItemBagQuantityInput = (props: IItemBagQuantityInput) => {
  const { id, amount } = props;

  const { updateItemAmount, removeItem } = useCart();

  function addCount() {
    amount === 9 ? maxItem() : updateCount('up');
  }

  function decreaseCount() {
    amount === 1 ? deleteItem() : updateCount('down');
  }

  function updateCount(type: IUpdateType) {
    updateItemAmount(id, type);
  }

  function deleteItem() {
    alert('Item removido');
    removeItem(id);
  }

  function maxItem() {
    alert('Quantidade Maxima atingida');
  }

  const layoutProps = {
    ...props,
    count: amount,
    addCount,
    decreaseCount,
  };

  return <Layout {...layoutProps} />;
};
