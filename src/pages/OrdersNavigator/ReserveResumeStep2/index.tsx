import * as React from 'react';
import { useState } from 'react';

import { goBack, navigate } from '~/utils';

import { IReserveResumeStep2 } from '~/pages/OrdersNavigator/ReserveResumeStep2/data';
import { ReserveResumeStep2 as Layout } from './Layout';

export const ReserveResumeStep2 = (props: IReserveResumeStep2) => {
  const [step, setStep] = useState<number>(0);

  function cancelOpen() {
    setStep(1);
  }

  function closeModal() {
    setStep(0);
  }

  function cancel() {
    if (step === 1) return setStep(2);
    closeModal();
    navigate('Menu', {});
  }

  const layoutProps = {
    ...props,
    step,
    goBack,
    cancel,
    closeModal,
    cancelOpen,
    openModal: () => navigate('MapModal', {}),
  };

  return <Layout {...layoutProps} />;
};
