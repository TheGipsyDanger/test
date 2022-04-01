import * as React from 'react';
import { Image } from 'react-native';

import {
  Text,
  Modal,
  Button,
  Spacing,
  Wrapped,
  Conditional,
} from '~/components/Basics';

import { equivalent } from '~/utils';

import { useModal } from '~/context';
import { IcModalSuccess, IcModalError, IcClose } from '~/assets/svg';
import { modalBottom } from '~/assets/images';

export const InfoModal = ({ step = 1, cancel, closeModal }: any) => (
  <Modal bg="transparent" hasClosableButton={false} type={'full'}>
    <Wrapped px={4}>
      <Wrapped
        height={equivalent(useModal().modalSizes.height, 60)}
        bg="modals"
        borderRadius="card">
        <Wrapped flex={1} py={4} justifyContent="space-between">
          <Wrapped pt={4}>
            <Wrapped mb={4} pt={4}>
              <Wrapped center px={4}>
                {step === 2 ? <IcModalSuccess /> : <IcModalError />}
              </Wrapped>
            </Wrapped>

            <Wrapped center px={4}>
              <Text textAlign="center" variant="outback:h7">
                {step === 2
                  ? `Reserva cancelada\ncom sucesso!`
                  : `Tem certeza de que\ndeseja cancelar a reserva?`}
              </Text>
            </Wrapped>
          </Wrapped>

          <Wrapped pb={4}>
            <Wrapped px={4} pb={4} mb={4}>
              <Conditional render={step === 2}>
                <Button
                  height={40}
                  onPress={cancel}
                  textVariant="outback:h2"
                  text={'Fechar'}
                />
                <Spacing space={1}>
                  <Button
                    height={40}
                    onPress={closeModal}
                    textVariant="outback:h2"
                    text={'Não, fechar'}
                  />
                  <Button
                    variant="outback:white:border:red"
                    height={40}
                    onPress={cancel}
                    textVariant="outback:h2"
                    color="text"
                    text={'Sim, quero cancelar a reserva'}
                  />
                </Spacing>
              </Conditional>
            </Wrapped>
          </Wrapped>
        </Wrapped>
        <Wrapped position="absolute" bottom={0} left={0} right={0}>
          <Image source={modalBottom} style={{ width: '100%' }} />
        </Wrapped>
        <Wrapped
          position="absolute"
          top={10}
          right={10}
          width={30}
          height={30}
          mb={4}>
          <Wrapped flex={1} center onPress={closeModal}>
            <IcClose width={12} height={12} />
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Modal>
);
