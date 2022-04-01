import * as React from 'react';

import { useModal } from '~/context';

import { IModal } from '~/components/Basics/Modal/data';
import { Modal as Layout } from './Layout';

export const Modal = ({
  hasBackdrop = true,
  avoidKeyboard = false,
  ...props
}: IModal) => {
  const { closeModal } = useModal();

  const layoutProps = {
    ...props,
    avoidKeyboard,
    closeModal,
    isVisible: true,
    onBackButtonPress: hasBackdrop ? closeModal : () => {},
    onBackdropPress: hasBackdrop ? closeModal : () => {},
  };

  return <Layout {...layoutProps} />;
};
