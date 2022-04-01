import * as React from 'react';

import { useModal } from '~/context';
import { IElementMap } from '~/utils';
import { TestModal } from '~/components/TestModal';
import { ItemDetaislModal } from '~/components/ItemDetaislModal';
import { RequestLocationModal } from '~/components/RequestLocationModal';
import { LoginAndRegisterModal } from '~/components/LoginAndRegisterModal';
import { ResetPasswordModal } from '~/components/ResetPasswordModal';
import { AzureLoginAndRegisterModal } from '~/components/AzureLoginAndRegisterModal';
import { AzureEditModal } from '~/components/AzureEditModal';
import { UserActionRequestLocationModal } from '~/components/UserActionRequestLocationModal';
import { LoadingModal } from '~/components/LoadingModal';
import { RequestLoginModal } from '~/components/RequestLoginModal';
import { DialogModal } from '~/components/DialogModal';
import { OrderResumeModal } from '~/components/OrderResumeModal';

export const ModalController = () => {
  const { modalName } = useModal();

  const Modals: IElementMap = {
    TestModal: <TestModal />,
    Loading: <LoadingModal />,
    ItemDetaislModal: <ItemDetaislModal />,
    RequestLocationModal: <RequestLocationModal />,
    LoginAndRegisterModal: <LoginAndRegisterModal />,
    ResetPasswordModal: <ResetPasswordModal />,
    AzureLoginAndRegisterModal: <AzureLoginAndRegisterModal />,
    RequestLoginModal: <RequestLoginModal />,
    UserActionRequestLocationModal: <UserActionRequestLocationModal />,
    DialogModal: <DialogModal />,
    OrderResumeModal: <OrderResumeModal />,
    AzureEditModal: <AzureEditModal />,
  };

  return Modals[modalName] || <></>;
};
