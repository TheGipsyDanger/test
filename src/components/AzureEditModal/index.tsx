import * as React from 'react';

import { Modal } from '~/components/Basics/Modal';
// import { useModal, useUser, useUserAction } from '~/context';

import { IAzureEditModal } from '~/components/AzureEditModal/data';
import { AzureEditModal as Layout } from './Layout';

export const AzureEditModal = (props: IAzureEditModal) => {
  const layoutProps = {
    ...props,
  };

  return (
    <Modal hasClosableButton={false} type={'full'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
