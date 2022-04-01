import * as React from 'react';

import { Wrapped, Text, Button, Spacing } from '~/components/Basics';
import { Container } from './Container';

import { IcLogo, IcClose } from '~/assets/svg';

import { IRequestLocatioWelcometLayout } from '~/components/RequestLocationModal/data';

export const Welcome = ({
  goToStep,
  openInternal,
  ...props
}: IRequestLocatioWelcometLayout) => (
  <Container {...props}>
    <Wrapped px={4}>
      <Wrapped mt={4} mb={3} alignItems="flex-end">
        <IcClose />
      </Wrapped>
      <Spacing space={4}>
        <Wrapped center>
          <IcLogo color="primary" width={115} height={42} />
        </Wrapped>
        <Wrapped>
          <Text variant="outback:h5" color="text" textAlign="center">
            {`Ative sua licalizacao para acessar\no Outback mais perto de voce`}
          </Text>
        </Wrapped>
        <Button
          firstIcon="IcLocalization"
          onPress={openInternal}
          variant="outback:white:border"
          color="text"
          textVariant="outback:h8"
          text="Ativar localização"
        />
        <Button
          onPress={() => goToStep(2)}
          textVariant="outback:h2"
          text="Inserir CEP"
        />
      </Spacing>
    </Wrapped>
  </Container>
);
