import * as React from 'react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped } from '~/components/Basics';
import { metrics } from '~/styles';
import { useCart } from '~/context';
import { BRLMoney, calculateTotal, prepareToCart } from '~/utils';

import {
  IModalPosition,
  ICartResumeModal,
} from '~/components/CartResumeModal/data';
import { CartResumeModal as Layout } from './Layout';

export const CartResumeModal = (props: ICartResumeModal) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  const { navigate } = useNavigation();

  const modalizeRef = useRef<Modalize>();

  const [content, setContent] = useState<IModalPosition>('initial');

  const { itens } = useCart();

  function changeContent(position: IModalPosition) {
    setContent(() => position);
  }

  function openModal() {
    changeContent('top');
    modalizeRef.current?.open('top');
  }

  function closeModal() {
    modalizeRef.current?.close('alwaysOpen');
  }

  function goToPayment() {
    navigate('Payment');
  }

  const modalHeight =
    itens.length === 0 ? 400 : metrics.height - insets.top - 100;

  const total = BRLMoney(calculateTotal(prepareToCart(itens)) + 11.99);

  const layoutProps = {
    ...props,
    t,
    total,
    content,
    openModal,
    closeModal,
    goToPayment,
    modalHeight,
  };

  return (
    <Modalize
      scrollViewProps={{
        scrollEnabled: false,
      }}
      ref={modalizeRef}
      modalHeight={modalHeight}
      withHandle={true}
      handlePosition={'inside'}
      handleStyle={{ backgroundColor: 'transparent' }}
      onPositionChange={(position: IModalPosition) => changeContent(position)}
      alwaysOpen={154}>
      <Wrapped flex={1}>
        <Layout {...layoutProps} />
      </Wrapped>
    </Modalize>
  );
};
