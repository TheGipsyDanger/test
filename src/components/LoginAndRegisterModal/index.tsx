import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '~/components/Basics/Modal';
import { useModal, useKeyboard } from '~/context';
import {
  selectItem,
  useLoginForm,
  defineFields,
  ISelectorItem,
  useRegisterForm,
} from '~/utils';

import {
  selectorDataArray,
  ILoginAndRegisterModal,
} from '~/components/LoginAndRegisterModal/data';
import { LoginAndRegisterModal as Layout } from './Layout';

export const LoginAndRegisterModal = (props: ILoginAndRegisterModal) => {
  const { t } = useTranslation();
  const { modalSizes, closeModal: closeModalContext, openModal } = useModal();
  const { keyboardHeight, isShow } = useKeyboard();
  const [selectorData, setSelectorData] =
    useState<ISelectorItem[]>(selectorDataArray);

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const loginForm = useLoginForm(onSubmit);
  const registerForm = useRegisterForm(onSubmit);

  function onSubmit() {
    setShowInfoModal(true);
  }

  function selectorPress(index: number) {
    loginForm.resetForm();
    registerForm.resetForm();
    setSelectorData(selectItem(selectorData, index));
  }

  function goToResetPssword() {
    openModal('ResetPasswordModal');
  }

  function closeModal() {
    showInfoModal ? setShowInfoModal(false) : closeModalContext();
  }

  const isLogin = selectorData[0].isActive;

  const form = isLogin ? loginForm : registerForm;

  const layoutProps = {
    ...props,
    t,
    form,
    isShow,
    isLogin,
    closeModal,
    modalSizes,
    selectorData,
    selectorPress,
    showInfoModal,
    keyboardHeight,
    goToResetPssword,
    fields: defineFields(Object.keys(form.values)),
  };

  return (
    <Modal bg="transparent" hasClosableButton={false} type={'default'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
