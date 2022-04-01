import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { IcLogo, IcClose } from '~/assets/svg';

import { ILoginAndRegisterModalHeader } from '~/components/LoginAndRegisterModal/data';

export const Header = ({ t, closeModal }: ILoginAndRegisterModalHeader) => (
  <Wrapped>
    <Wrapped mb={4} center>
      <IcLogo color="primary" width={115} height={42} />
    </Wrapped>
    <Wrapped position="absolute" right={0} width={30} height={30} mb={4}>
      <Wrapped flex={1} center onPress={closeModal}>
        <IcClose width={12} height={12} />
      </Wrapped>
    </Wrapped>
    <Wrapped center mb={2}>
      <Text variant="outback:h5">{t('LOGIN.MAIN')}</Text>
    </Wrapped>
  </Wrapped>
);
