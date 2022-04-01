import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Modal } from '~/components/Basics/Modal';
import { useModal } from '~/context';
import { goBack } from '~/utils';

import { IRequestLoginModal } from '~/components/RequestLoginModal/data';
import { RequestLoginModal as Layout } from './Layout';

export const RequestLoginModal = (props: IRequestLoginModal) => {
  const { modalSizes, closeModal, openModal } = useModal();

  function press() {
    return openModal('AzureLoginAndRegisterModal');
  }

  function close() {
    goBack();
    return closeModal();
  }

  const layoutProps = {
    ...props,
    press,
    close,
    modalSizes,
    t: useTranslation().t,
    bottom: useSafeAreaInsets().bottom,
  };

  return (
    <Modal bg="transparent" flex={1} hasClosableButton={false} type={'full'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
