import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '~/components/Basics/Modal';
import { useModal, useUser, useUserAction } from '~/context';
import { createUserOptionFactory } from '~/utils';

import {
  ILoginResp,
  IAzureLoginAndRegisterModal,
} from '~/components/AzureLoginAndRegisterModal/data';
import { AzureLoginAndRegisterModal as Layout } from './Layout';

export const AzureLoginAndRegisterModal = (
  props: IAzureLoginAndRegisterModal
) => {
  const { login: loginReq } = createUserOptionFactory();
  const { t } = useTranslation();
  const { modalSizes, closeModal, openModal } = useModal();
  const { setUserActionInfosContext } = useUserAction();
  const { setUser, user } = useUser();

  function onFail(reason: any) {
    console.log(reason);
  }

  function onLogin({ data }: ILoginResp) {
    login(data.id_token);
  }

  async function login(token: string) {
    try {
      const user = await loginReq(token);
      setUser({ ...user, token });
      closeModal();
    } catch (error) {
      openModal('DialogModal');
      setUserActionInfosContext({
        text: 'LOGIN.ERROR',
        buttonText: 'LOGIN.ERROR',
        status: false,
      });
    }
  }

  const layoutProps = {
    ...props,
    t,
    user,
    onFail,
    onLogin,
    modalSizes,
  };

  return (
    <Modal hasClosableButton={false} type={'full'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
