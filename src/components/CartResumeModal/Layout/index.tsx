import * as React from 'react';

import { Wrapped, Text, Button, Conditional } from '~/components/Basics';
import { CartResume } from '~/components/CartResume';
import { IcArrowUp } from '~/assets/svg';

import { ICartResumeModalLayout } from '~/components/CartResumeModal/data';

export const CartResumeModal = ({
  t,
  total,
  content,
  openModal,
  closeModal,
  goToPayment,
  modalHeight,
  where = 'cart',
}: ICartResumeModalLayout) => {
  return (
    <Wrapped variant="outback:topRadius">
      <Conditional render={content === 'initial'}>
        <Wrapped flex={1}>
          <Wrapped
            center
            my={2}
            onPress={openModal}
            hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}>
            <IcArrowUp />
          </Wrapped>
          <Wrapped center mb={2}>
            <Text variant="outback:h4">{`Subtotal ${total}`}</Text>
          </Wrapped>
          <Wrapped mx={3}>
            <Conditional render={total === 'R$ 11,99' && where !== 'payment'}>
              <Button
                variant="outback:disabled"
                height={55}
                onPress={goToPayment}
                textVariant="outback:h2"
                text={
                  where === 'cart'
                    ? t('CART.RESUME.BTN')
                    : t('CART.RESUME.BTN_2')
                }
              />
              <Button
                height={55}
                onPress={goToPayment}
                textVariant="outback:h2"
                text={
                  where === 'cart'
                    ? t('CART.RESUME.BTN')
                    : t('CART.RESUME.BTN_2')
                }
              />
            </Conditional>
          </Wrapped>
        </Wrapped>
        <Wrapped height={modalHeight}>
          <CartResume {...{ where, onClose: closeModal }} />
        </Wrapped>
      </Conditional>
    </Wrapped>
  );
};
