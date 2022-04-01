import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { Spacing } from '~/components/Basics/Spacing';
import { IcLogo, IcClose } from '~/assets/svg';

import { IResetPasswordModalHeader } from '~/components/ResetPasswordModal/data';

export const Header = ({ t, closeModal }: IResetPasswordModalHeader) => (
  <Wrapped>
    <Wrapped mb={4} center>
      <IcLogo color="primary" width={115} height={42} />
    </Wrapped>
    <Wrapped position="absolute" right={0} width={30} height={30} mb={4}>
      <Wrapped flex={1} center onPress={closeModal}>
        <IcClose width={12} height={12} />
      </Wrapped>
    </Wrapped>
    <Spacing space={4}>
      <Wrapped center>
        <Text variant="outback:h5">{t('RESET_PASSWORD.TITLE')}</Text>
      </Wrapped>
      <Wrapped center>
        <Text textAlign="center" variant="outback:h5">
          {t('RESET_PASSWORD.STEP_2.MAIN_PART_1')}
          <Text variant="outback:h4">
            {t('RESET_PASSWORD.STEP_2.MAIN_PART_2')}
          </Text>
          {t('RESET_PASSWORD.STEP_2.MAIN_PART_3')}
        </Text>
      </Wrapped>
    </Spacing>
  </Wrapped>
);
