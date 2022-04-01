import * as React from 'react';

import { Wrapped } from '~/components/Basics';

import { IRequestLocationModalLayout } from '~/components/RequestLocationModal/data';

export const RequestLocationModal = ({
  currentModal,
}: IRequestLocationModalLayout) => (
  <Wrapped testID={`RequestLocationModal`}>{currentModal}</Wrapped>
);
