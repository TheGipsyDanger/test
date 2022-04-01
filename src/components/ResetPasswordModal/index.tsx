import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '~/components/Basics/Modal';
import { useModal } from '~/context';
import { metrics } from '~/styles/metrics';
import {
  IFunctionMap,
  defineFields,
  INumberToForm,
  useResetPasswordForm,
  useResetPasswordRequestCodeForm,
  useResetPasswordRequestEmailForm,
} from '~/utils';

import { IResetPasswordModal } from '~/components/ResetPasswordModal/data';
import { ResetPasswordModal as Layout } from './Layout';

export const ResetPasswordModal = (props: IResetPasswordModal) => {
  const { t } = useTranslation();
  const { isIos } = metrics;
  const [step, setStep] = useState<number>(0);
  const [showRequestModal, setShowRequestModal] = useState<boolean>(false);
  const { closeModal: closeModalContext } = useModal();

  function closeModal() {
    setStep(0);
    setShowRequestModal(false);
    closeModalContext();
  }

  function onSubmit() {
    const options: IFunctionMap = {
      0: () => onStep1(),
      1: () => onStep2(),
      2: () => onStep3(),
    };
    options[step]();
  }

  function onStep1() {
    requestCode.setFieldValue('email', requestEmail.values.email);
    requestEmail.resetForm();
    setStep(1);
  }

  function onStep2() {
    setShowRequestModal(true);
    setStep(2);
  }

  function onStep3() {
    alert('SUBMIT');
  }

  const requestEmail = useResetPasswordRequestEmailForm(onSubmit);

  const requestCode = useResetPasswordRequestCodeForm(onSubmit);

  const requestReset = useResetPasswordForm(onSubmit);

  const options: INumberToForm = {
    0: requestEmail,
    1: requestCode,
    2: requestReset,
  };

  const form = options[step];

  const layoutProps = {
    ...props,
    t,
    form,
    step,
    isIos,
    closeModal,
    showRequestModal,
    fields: defineFields(Object.keys(form.values)),
  };

  return (
    <Modal bg="transparent" hasClosableButton={false} type={'default'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
