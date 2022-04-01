import * as React from 'react';

import { Wrapped, Text, Button } from '~/components/Basics';

import { equivalent } from '~/utils';
import { IcModalError } from '~/assets/svg';

import { IDialogModalLayout } from '~/components/DialogModal/data';

export const DialogModal = ({
  t,
  infos,
  press,
  modalSizes: { height },
}: IDialogModalLayout) => (
  <Wrapped
    height={equivalent(height, 40)}
    bg="modals"
    borderRadius="card"
    mx={2}>
    <Wrapped flex={1} m={4} justifyContent="space-around">
      <Wrapped center>
        <IcModalError />
      </Wrapped>
      <Text variant="outback:h7" textAlign="center">
        {t(infos.text)}
      </Text>
      <Button
        height={55}
        onPress={press}
        color="modals"
        textVariant="outback:h2"
        text={'VOLTAR'}
      />
    </Wrapped>
  </Wrapped>
);
