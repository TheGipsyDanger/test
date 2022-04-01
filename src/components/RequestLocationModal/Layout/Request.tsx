import * as React from 'react';

import { Wrapped, Text, Button } from '~/components/Basics';
import { IcClose, IcMapLocation } from '~/assets/svg';
import { equivalent } from '~/utils';

import { IRequestLocatioRequestLayout } from '~/components/RequestLocationModal/data';

export const Request = ({
  goToStep,
  modalSizes: { height },
}: IRequestLocatioRequestLayout) => {
  return (
    <Wrapped
      height={equivalent(height, 41.3)}
      mx={4}
      testID={`RequestLocationModal:Welcome`}>
      <Wrapped flex={1} bg="modals" variant="outback:fullRadius">
        <Wrapped px={4}>
          <Wrapped mt={4} mb={3} alignItems="flex-end">
            <IcClose />
          </Wrapped>
          <Wrapped center mb={4}>
            <IcMapLocation />
          </Wrapped>
          <Wrapped center mb={4}>
            <Text
              textAlign="center"
              variant="outback:h5">{`Habilite sua localização\npara ter uma experiência melhor\nao utilizar o aplicativo.`}</Text>
          </Wrapped>
          <Wrapped alignSelf="center" width={145}>
            <Button
              height={30}
              onPress={() => goToStep(1)}
              textVariant="outback:h2"
              text="Habilitar"
            />
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
