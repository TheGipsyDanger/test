import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { IPayment } from '~/pages/PaymentNavigator/Payment/data';
import { Payment as Layout } from './Layout';

export const Payment = (props: IPayment) => {
  const { t } = useTranslation();
  const { navigate, goBack } = useNavigation();

  const layoutProps = {
    ...props,
    goBack,
    t,
  };

  return <Layout {...layoutProps} />;
};
