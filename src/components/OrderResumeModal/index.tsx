import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { useModal } from '~/context';

import { Modal } from '~/components/Basics/Modal';

import { IOrderResumeModal } from '~/components/OrderResumeModal/data';
import { OrderResumeModal as Layout } from './Layout';

export const OrderResumeModal = (props: IOrderResumeModal) => {
  const { closeModal } = useModal();

  function goBack() {
    closeModal();
  }
  function onPress() {
    closeModal();
  }

  const layoutProps = {
    ...props,
    goBack,
    onPress,
    t: useTranslation().t,
  };

  return (
    <Modal hasClosableButton={false} type={'full'} flex={1}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
