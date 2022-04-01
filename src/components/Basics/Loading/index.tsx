import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { Wrapped } from '~/components/Basics/Wrapped';

export const Loading = () => (
  <Wrapped flex={1} center>
    <ActivityIndicator size="large" color="#A00F2D" />
  </Wrapped>
);
