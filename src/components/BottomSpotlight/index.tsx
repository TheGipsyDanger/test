import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useKeyboard } from '~/context';

import { IBottomSpotlight } from '~/components/BottomSpotlight/data';
import { BottomSpotlight as Layout } from './Layout';

export const BottomSpotlight = (props: IBottomSpotlight) => {
  const { isShow } = useKeyboard();

  const insets = useSafeAreaInsets();

  const layoutProps = {
    ...props,
    bottom: insets.bottom,
  };

  return isShow ? <></> : <Layout {...layoutProps} />;
};
