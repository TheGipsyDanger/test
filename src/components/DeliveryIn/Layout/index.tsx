import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { InfoModal } from '~/components/InfoModal';

import { goBack } from '~/utils';

import { IcArrowRight, IcMapLocationDelivery } from '~/assets/svg';
import { IDeliveryInLayout } from '~/components/DeliveryIn/data';

export const DeliveryIn = ({
  t,
  isOpenModal,
  isCloseModal,
  showInfoModal,
}: IDeliveryInLayout) => (
  <Wrapped
    p={3}
    pl={1}
    variant="outback:fullRadius"
    bg="modals"
    boxShadow="paymentWrapped"
    testID={`DeliveryIn`}>
    <Wrapped pl={1} flexDirection="row" justifyContent="space-between">
      <Text variant="outback:h3">{t('PAYMENT.CARDS.DELIVERY_IN.TITLE')}</Text>
      <Wrapped onPress={() => isOpenModal()} mb={4} flexDirection="row">
        <Text mr={1} variant="outback:body">
          {t('PAYMENT.CARDS.DELIVERY_IN.CHANGE')}
        </Text>
        <IcArrowRight />
      </Wrapped>
    </Wrapped>
    <Wrapped flexDirection="row">
      <IcMapLocationDelivery />
      <Wrapped ml={1}>
        <Text mb={0} variant="outback:h3">{`Casa`}</Text>
        <Text variant="outback:body">
          {t('PAYMENT.CARDS.DELIVERY_IN.ADDRESS')}
        </Text>
      </Wrapped>
    </Wrapped>
    {showInfoModal ? (
      <InfoModal
        imageDontExist={false}
        showCloseButton={false}
        secondButtonExist={true}
        textPropsSecondButton={t('PAYMENT.CARDS.DELIVERY_IN.CANCEL_CHANGE')}
        subTitleText={t('PAYMENT.CARDS.DELIVERY_IN.CHANGE_CARD')}
        subTitle={true}
        onClose={() => isCloseModal()}
        pressSecond={() => isCloseModal()}
        press={() => goBack()}
      />
    ) : (
      <></>
    )}
  </Wrapped>
);
