import * as React from 'react';

import { Wrapped, Text, Image } from '~/components/Basics';

import { IToastModalLayout } from '~/components/ToastModal/data';
import { equivalent } from '~/utils';
import { Triangule } from './styles';

export const ToastModal = ({
  modalSizes: { height },
  t,
  onOpenModal,
}: IToastModalLayout) => {
  return (
    <Wrapped px={8} bottom={-10} justifyContent="center">
      <Wrapped
        center
        testID={`ToastModal`}
        bg="modals"
        borderRadius="card"
        justifyContent="center"
        height={equivalent(height, 32)}>
        <Wrapped mb={4}>
          <Image
            width={200}
            height={80}
            uri="https://i.ibb.co/2hF5mc5/Group-4539.png"
          />
        </Wrapped>
        <Wrapped mb={4}>
          <Text variant="outback:h5" color="text">
            {t('TOAST_MODAL.SWIPE')}
          </Text>
        </Wrapped>
        <Wrapped center px={4} zIndex={1000}>
          <Wrapped
            onPress={() => onOpenModal()}
            bg="secondary"
            borderRadius="card"
            zIndex={999}
            px={10}>
            <Wrapped mt={1} mb={1}>
              <Text variant="outback:h2" color="white">{`Entendi`}</Text>
            </Wrapped>
          </Wrapped>
        </Wrapped>
        <Triangule />
        <Wrapped
          width={80}
          height={80}
          borderStyle="solid"
          borderRadius="circle"
          bg="transparent"
          borderColor="white"
          position="absolute"
          bottom={-120}
          borderWidth={3}
        />
      </Wrapped>
    </Wrapped>
  );
};
