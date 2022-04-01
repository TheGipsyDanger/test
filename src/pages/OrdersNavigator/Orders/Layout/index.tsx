import * as React from 'react';

import { Wrapped, OrderHeader, Conditional } from '~/components';
import { Lists } from './Lists';
import { Empty } from './Empty';

import { IOrdersLayout } from '~/pages/OrdersNavigator/Orders/data';

export const Orders = (props: IOrdersLayout) => (
  <Wrapped flex={1}>
    <OrderHeader label="Pedidos" />
    <Conditional render={false}>
      <Empty {...props} />
      <Lists {...props} />
    </Conditional>
  </Wrapped>
);
