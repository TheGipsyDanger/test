import * as React from 'react';
import { View } from 'react-native';

import { Container } from './Container';
import { Wrapped, Text, Button, Input, Conditional } from '~/components/Basics';
import { IcLocalization, IcClose, IcLogo } from '~/assets/svg';

import { IRequestLocationZipLayout } from '~/components/RequestLocationModal/data';

export const ZipRequest = ({
  locationRef,
  doMeasure,
  location,
  input,
  setInput,
  setAddressOption,
  showOptions,
  goToApp,
  ...props
}: IRequestLocationZipLayout) => (
  <Container {...props}>
    <Wrapped px={2}>
      <Wrapped mx={1} mt={4} mb={3} alignItems="flex-end">
        <IcClose />
      </Wrapped>
      <Wrapped mb={4} center>
        <IcLogo color="primary" width={115} height={42} />
      </Wrapped>
      <Wrapped mb={4}>
        <Text mb={4} variant="outback:h5" color="text" textAlign="center">
          {`Ative sua licalizacao para acessar\no Outback mais perto de você`}
        </Text>
      </Wrapped>
      <Wrapped zIndex={1000}>
        <Conditional render={showOptions}>
          <Wrapped
            left={0}
            right={0}
            top={location}
            position="absolute"
            zIndex={1000}>
            <Wrapped bg="background" borderRadius="button">
              <Wrapped
                onPress={() =>
                  setAddressOption({
                    address: 'Madureira, Rio de janeiro, Rio de janeiro',
                  })
                }
                pt={2}
                pb={2}
                px={4}>
                <Text variant="outback:h8">21351-050</Text>
                <Text variant="outback:h5">
                  Madureira, Rio de janeiro, Rio de janeiro
                </Text>
              </Wrapped>
              <Wrapped
                onPress={() =>
                  setAddressOption({
                    address: 'Madureira, Rio de janeiro, Rio de janeiro',
                  })
                }
                p={2}
                px={4}>
                <Text variant="outback:h8">21351-050</Text>
                <Text variant="outback:h5">
                  Madureira, Rio de janeiro, Rio de janeiro
                </Text>
              </Wrapped>
              <Wrapped
                onPress={() =>
                  setAddressOption({
                    address: 'Madureira, Rio de janeiro, Rio de janeiro',
                  })
                }
                p={2}
                px={4}>
                <Text variant="outback:h8">21351-050</Text>
                <Text variant="outback:h5">
                  Madureira, Rio de janeiro, Rio de janeiro
                </Text>
              </Wrapped>
            </Wrapped>
          </Wrapped>
          <></>
        </Conditional>
        <View onLayout={doMeasure} ref={locationRef}>
          <Wrapped mb={4}>
            <Text mb={4} variant="outback:h4" color="text">
              {`Insira sua localização`}
            </Text>
            <Wrapped>
              <Wrapped
                flexDirection="row"
                alignItems="center"
                bg="background"
                borderRadius="button"
                justifyContent="space-between">
                <Wrapped ml={2} mr={3}>
                  <IcLocalization />
                </Wrapped>
                <Wrapped flex={1}>
                  <Input
                    value={input}
                    onChange={setInput}
                    size="h5"
                    font="regular"
                    placeholder="Ex: Av. teste"
                    height={40}
                  />
                </Wrapped>
                <Wrapped onPress={() => setInput('')} ml={3} mr={2}>
                  <IcClose />
                </Wrapped>
              </Wrapped>
            </Wrapped>
          </Wrapped>
        </View>
      </Wrapped>
      {/*  */}
      <Wrapped>
        <Button
          onPress={goToApp}
          textVariant="outback:h2"
          text="Confirmar"
          disabled={input.length < 10}
        />
      </Wrapped>
    </Wrapped>
  </Container>
);
