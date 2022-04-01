import * as React from 'react';

import { useCart } from '~/context';
import { ITabIcon } from '~/components/TabIcon/data';
import { TabIcon as Layout } from './Layout';

export const TabIcon = (props: ITabIcon) => {
  const { itens } = useCart();

  const layoutProps = {
    ...props,
    count: itens.length,
  };

  return <Layout {...layoutProps} />;
};
