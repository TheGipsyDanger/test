import * as React from 'react';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { goBack } from '~/utils';

import { IOrderHeader } from '~/components/OrderHeader/data';
import { OrderHeader as Layout } from './Layout';

export const OrderHeader = (props: IOrderHeader) => {
  const { hasList = true } = props;

  const insetsTop = useSafeAreaInsets().top;

  const modalHeader = hasList ? insetsTop + 254 : insetsTop + (112 - insetsTop);

  const mt = Platform.OS === 'android' ? insetsTop + 30 : insetsTop;

  const layoutProps = {
    ...props,
    t: useTranslation().t,
    mt,
    goBack,
    insetsTop,
    modalHeader,
  };

  return <Layout {...layoutProps} />;
};
