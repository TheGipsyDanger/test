import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '~/components/Basics/Modal';

import { useModal, useUserAction } from '~/context';

import { IDialogModal } from '~/components/DialogModal/data';
import { DialogModal as Layout } from './Layout';

export const DialogModal = (props: IDialogModal) => {
  const { modalSizes, closeModal } = useModal();

  function press() {
    closeModal();
  }

  const layoutProps = {
    ...props,
    press,
    modalSizes,
    t: useTranslation().t,
    infos: useUserAction().userActionInfosContext,
  };

  return (
    <Modal
      bg="transparent"
      hasClosableButton={false}
      avoidKeyboard={true}
      type={'full'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
