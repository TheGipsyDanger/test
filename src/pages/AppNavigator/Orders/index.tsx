import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { IOrders } from './data';
import { Orders as Layout } from './Layout';

export const Orders = (props: IOrders) => {
  const { t } = useTranslation();

  const layoutProps = {
    ...props,
    t,
  };

  return <Layout {...layoutProps} />;
};
