import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IToast } from '~/components/Toast/data';
import { Toast as Layout } from './Layout';

export const Toast = (props: IToast) => {
  const insets = useSafeAreaInsets();

  const layoutProps = {
    ...props,
    bottom: insets.bottom,
  };

  return <Layout {...layoutProps} />;
};
