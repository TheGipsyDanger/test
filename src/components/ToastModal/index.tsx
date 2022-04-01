import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { IToastModal } from '~/components/ToastModal/data';
import { useModal } from '~/context';
import { Modal } from '..';
import { ToastModal as Layout } from './Layout';

export const ToastModal = (props: IToastModal) => {
  const { modalSizes } = useModal();
  const { t } = useTranslation();

  const layoutProps = {
    ...props,
    t,
    modalSizes,
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
