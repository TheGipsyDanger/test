import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { Button } from '~/components/Basics/Button';
import { equivalent } from '~/utils';
import { IcLogo, IcClose } from '~/assets/svg';

import { IRequestLoginModalLayout } from '~/components/RequestLoginModal/data';

export const RequestLoginModal = ({
  t,
  close,
  press,
  bottom,
  modalSizes: { height },
}: IRequestLoginModalLayout) => (
  <Wrapped flex={1} justifyContent="flex-end">
    <Wrapped
      height={equivalent(height, 37) + bottom}
      bg="modals"
      borderTopRightRadius="card"
      borderTopLeftRadius="card"
      justifyContent="center">
      <Wrapped mb={4}>
        <Wrapped center mb={4}>
          <IcLogo color="primary" width={115} height={42} />
        </Wrapped>
      </Wrapped>
      <Wrapped mb={4}>
        <Wrapped mb={4}>
          <Text mb={0} variant="outback:h5" textAlign="center">
            {t('ACTION.OUTBACK.REQUEST_LOGIN.TEXT')}
          </Text>
        </Wrapped>
      </Wrapped>
      <Wrapped mx={4}>
        <Wrapped mx={0}>
          <Button
            height={48}
            onPress={press}
            textVariant="outback:h2"
            text={t('ACTION.OUTBACK.REQUEST_LOGIN.BTN')}
          />
        </Wrapped>
      </Wrapped>
      <Wrapped
        position="absolute"
        top={20}
        right={20}
        width={30}
        height={30}
        mb={4}>
        <Wrapped flex={1} center onPress={close}>
          <IcClose width={12} height={12} />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
