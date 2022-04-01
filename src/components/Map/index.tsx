import * as React from 'react';
import { useEffect, useState } from 'react';

import { useLocations, equivalent } from '~/utils';
import { useModal } from '~/context';

import { IMap } from '~/components/Map/data';
import { Map as Layout } from './Layout';

export const Map = (props: IMap) => {
  const { size = 100 } = props;

  const [location, setLocation] = useState<any>({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  const {
    modalSizes: { height },
  } = useModal();

  const [loading, setLoading] = useState<boolean>(true);

  const { currentPosition } = useLocations();

  const modalSize = equivalent(height, size);

  useEffect(() => {
    (async () => {
      const position = await currentPosition();
      if (position?.coords) {
        setLocation(position);
        setLoading(true);
      }
    })();
  }, []);

  const layoutProps = {
    ...props,
    location,
    modalSize,
    loading,
  };

  return <Layout {...layoutProps} />;
};
