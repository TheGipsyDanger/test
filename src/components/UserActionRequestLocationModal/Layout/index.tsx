import * as React from 'react';
import { Image } from 'react-native';

import { Wrapped, Button, Spacing, Text } from '~/components/Basics';
import { ModalContainer } from '~/components/ModalContainer';

import { IcClose, IcLogo, IcLocalizationTwo } from '~/assets/svg';
import { modalBottom2 } from '~/assets/images';

import { IUserActionRequestLocationModalLayout } from '~/components/UserActionRequestLocationModal/data';

export const UserActionRequestLocationModal = ({
  t,
  press,
  closeModal,
}: IUserActionRequestLocationModalLayout) => (
  <Wrapped testID={`UserActionRequestLocationModal`}>
    <ModalContainer px={1} size={74} hasSafeArea={false}>
      <Wrapped px={4}>
        <Wrapped mb={3} alignItems="flex-end">
          <Wrapped onPress={closeModal}>
            <IcClose />
          </Wrapped>
        </Wrapped>
        <Wrapped center mb={4}>
          <IcLogo color="primary" width={115} height={42} />
        </Wrapped>
      </Wrapped>
      <Wrapped mb={4}>
        <Text variant="outback:h5" textAlign="center">
          {t('ACTION.OUTBACK.REQUEST_LOCATION_MODAL.MAIN')}
        </Text>
      </Wrapped>
      <Wrapped mb={4} center>
        <IcLocalizationTwo />
      </Wrapped>
      <Wrapped mx={4}>
        <Spacing space={2}>
          <Button
            height={48}
            onPress={press}
            textVariant="outback:h2"
            text={t('ACTION.OUTBACK.REQUEST_LOCATION_MODAL.BTN_1')}
          />
          <Button
            height={48}
            onPress={closeModal}
            textVariant="outback:h2"
            text={t('ACTION.OUTBACK.REQUEST_LOCATION_MODAL.BTN_2')}
          />
        </Spacing>
      </Wrapped>
      <Wrapped position="absolute" bottom={0} left={0} right={0}>
        <Image
          source={modalBottom2}
          resizeMode="stretch"
          style={{ width: '100%' }}
        />
      </Wrapped>
    </ModalContainer>
  </Wrapped>
);
