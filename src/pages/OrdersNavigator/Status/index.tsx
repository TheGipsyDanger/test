import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as Linking from 'expo-linking';

import { useOrderInfos } from '~/context';
import { goBack } from '~/utils';

import { IStatus } from '~/pages/OrdersNavigator/Status/data';
import { Status as Layout } from './Layout';

export const Status = (props: IStatus) => {
  const { resumeToShow } = useOrderInfos();

  const phone = '+5521975542891';

  function openPhone() {
    Linking.openURL(`tel:${phone}`);
  }

  function openWhats() {
    Linking.openURL(`http://api.whatsapp.com/send?phone=${phone}`);
  }

  const layoutProps = {
    ...props,
    goBack,
    openPhone,
    openWhats,
    where: resumeToShow,
    t: useTranslation().t,
  };

  return <Layout {...layoutProps} />;
};
