import * as React from 'react';
import { Image } from 'react-native';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { Modal } from '~/components/Basics/Modal';
import { Spacing } from '~/components/Basics/Spacing';
import { Button } from '~/components/Basics/Button';
import { equivalent } from '~/utils';

import { IcModalSuccess, IcModalError } from '~/assets/svg';
import { modalBottom } from '~/assets/images';

import { IInfoModal } from '~/components/LoginAndRegisterModal/data';

// TODO: REMOVER QUANDO ENTRAR O BACK
const teste = false;

export const InfoModal = ({
  t,
  closeModal,
  modalSizes: { height },
}: IInfoModal) => (
  <Modal
    bg="transparent"
    hasClosableButton={false}
    avoidKeyboard={true}
    type={'full'}>
    <Wrapped px={4}>
      <Wrapped
        height={equivalent(height, 52)}
        bg="modals"
        borderRadius="card"
        justifyContent="center">
        <Spacing space={4}>
          <Wrapped center px={4}>
            {teste ? <IcModalSuccess /> : <IcModalError />}
          </Wrapped>
          <Wrapped center px={4}>
            <Text textAlign="center" variant="outback:h7">
              {teste
                ? t('REGISTER.INFO_MODAL.SUCCESS')
                : t('REGISTER.INFO_MODAL.ERROR')}
            </Text>
          </Wrapped>
          <Wrapped px={4} mb={4}>
            <Button
              height={48}
              onPress={closeModal}
              textVariant="outback:h2"
              text={teste ? 'Entrar' : 'Revisar'}
            />
          </Wrapped>
        </Spacing>
        <Wrapped position="absolute" bottom={0} left={0} right={0}>
          <Image source={modalBottom} style={{ width: '100%' }} />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Modal>
);
