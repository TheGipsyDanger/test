import * as React from 'react';

import { goBack } from '~/utils';

import { IMapModal } from '~/pages/UserActionNavigator/MapModal/data';
import { MapModal as Layout } from './Layout';

export const MapModal = (props: IMapModal) => {
  const layoutProps = {
    ...props,
    goBack,
  };

  return <Layout {...layoutProps} />;
};
