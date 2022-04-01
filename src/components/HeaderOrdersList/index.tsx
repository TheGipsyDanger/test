import * as React from 'react';

import { navigate } from '~/utils';

import { IHeaderOrdersList } from '~/components/HeaderOrdersList/data';
import { HeaderOrdersList as Layout } from './Layout';

export const HeaderOrdersList = (props: IHeaderOrdersList) => {
  function openResume() {
    navigate('ReserveResume', {});
  }

  const layoutProps = {
    ...props,
    openResume,
  };

  return <Layout {...layoutProps} />;
};
