import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as Linking from 'expo-linking';

import { goBack, navigate } from '~/utils';

import { IReserveResume } from '~/pages/OrdersNavigator/ReserveResume/data';
import { ReserveResume as Layout } from './Layout';

export const ReserveResume = (props: IReserveResume) => {
  const phone = '+5521975542891';

  function openPhone() {
    Linking.openURL(`tel:${phone}`);
  }

  function openWhats() {
    Linking.openURL(`http://api.whatsapp.com/send?phone=${phone}`);
  }

  function reservePress() {
    navigate('ReserveResumeStep2', {});
  }
  function optionPress() {
    navigate('Menu', {});
  }

  const layoutProps = {
    ...props,
    goBack,
    openPhone,
    openWhats,
    optionPress,
    reservePress,
    t: useTranslation().t,
  };

  return <Layout {...layoutProps} />;
};
