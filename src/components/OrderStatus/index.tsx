import * as React from 'react';
import { useState, useEffect } from 'react';

import { IOrderStatus } from '~/components/OrderStatus/data';
import { OrderStatus as Layout } from './Layout';

export const OrderStatus = (props: IOrderStatus) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const layoutProps = {
    ...props,
    isOpen,
    toggle: () => setIsOpen((prev) => !prev),
  };

  return <Layout {...layoutProps} />;
};
