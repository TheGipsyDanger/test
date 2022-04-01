import * as React from 'react';
import { useState } from 'react';

import { IItemQuantityInput } from '~/components/ItemQuantityInput/data';
import { ItemQuantityInput as Layout } from './Layout';

export const ItemQuantityInput = (props: IItemQuantityInput) => {
  const { item, add, decrese } = props;
  const [count, setCount] = useState<number>(0);

  function addCount() {
    add(item);
    count === 9 ? null : setCount((old) => old + 1);
  }

  function decreaseCount() {
    decrese(item);
    count === 0 ? null : setCount((old) => old - 1);
  }

  const layoutProps = {
    ...props,
    count,
    addCount,
    decreaseCount,
  };

  return <Layout {...layoutProps} />;
};
