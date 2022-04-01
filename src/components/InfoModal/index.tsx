import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '~/components/Basics/Modal';

import { useModal, useUserAction } from '~/context';

import { IInfoModal } from '~/components/InfoModal/data';
import { InfoModal as Layout } from './Layout';

export const InfoModal = (props: IInfoModal) => {
  const { t } = useTranslation();
  const { modalSizes } = useModal();
  const { userActionInfosContext } = useUserAction();

  const layoutProps = {
    ...props,
    t,
    modalSizes,
    infos: userActionInfosContext,
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
