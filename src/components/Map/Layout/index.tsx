import * as React from 'react';

import { Wrapped, Conditional } from '~/components/Basics';

import { IcOutbackLocalization } from '~/assets/svg';

import { IMapLayout } from '~/components/Map/data';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export const Map = ({
  loading,
  location,
  modalSize,
  children,
  indicator = 'default',
}: IMapLayout) => {
  return (
    <Wrapped flex={1} testID={`Map`}>
      {loading && location.coords.latitude !== 0 && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ height: modalSize }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
          <Conditional render={indicator === 'outback'}>
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}>
              <IcOutbackLocalization />
            </Marker>
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </Conditional>
          {children}
        </MapView>
      )}
    </Wrapped>
  );
};
