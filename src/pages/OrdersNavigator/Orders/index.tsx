import * as React from 'react';
import { useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useModal, useOrderInfos } from '~/context';
import { IResumeTypes } from '~/utils';

import { IOrders } from '~/pages/OrdersNavigator/Orders/data';
import { Orders as Layout } from './Layout';

export const Orders = (props: IOrders) => {
  const { navigate } = useNavigation();
  const { openModal } = useModal();
  const { setResumeToShow } = useOrderInfos();

  const data = [{}, {}, {}, {}, {}];

  useFocusEffect(
    useCallback(() => {
      setResumeToShow('delivery');
    }, [])
  );

  function openOrderDetails(id: string) {
    openModal('OrderResumeModal');
  }

  function openResume(where: IResumeTypes) {
    setResumeToShow(where);
    navigate('Status');
  }

  const layoutProps = {
    ...props,
    data,
    openResume,
    openOrderDetails,
    t: useTranslation().t,
  };

  return <Layout {...layoutProps} />;
};
