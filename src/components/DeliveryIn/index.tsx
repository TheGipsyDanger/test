import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { IDeliveryIn } from '~/components/DeliveryIn/data';
import { useUserAction } from '~/context';
import { DeliveryIn as Layout } from './Layout';

export const DeliveryIn = (props: IDeliveryIn) => {
  const { t } = useTranslation();
  const [showInfoModal, setShowInfoModal] = React.useState<boolean>(false);
  const { setUserActionInfosContext } = useUserAction();

  function isOpenModal() {
    setShowInfoModal(true);
    setUserActionInfosContext({
      text: 'PAYMENT.CARDS.CHANGE_ADDRESS',
      buttonText: 'PAYMENT.CARDS.DELIVERY_IN.CHANGE_CONFIRM',
      status: false,
    });
  }

  function isCloseModal() {
    setShowInfoModal(false);
  }

  const layoutProps = {
    ...props,
    t,
    isOpenModal,
    showInfoModal,
    isCloseModal,
  };

  return <Layout {...layoutProps} />;
};
