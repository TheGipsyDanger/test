import * as React from 'react';

import { Modal } from '~/components/Basics/Modal';

import { ILoadingModal } from '~/components/LoadingModal/data';
import { LoadingModal as Layout } from './Layout';

export const LoadingModal = (props: ILoadingModal) => (
  <Modal bg="transparent" hasClosableButton={false} type={'default'}>
    <Layout {...props} />
  </Modal>
);
