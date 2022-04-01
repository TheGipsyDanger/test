import * as React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { IWrappedLayout } from '~/components/Basics/Wrapped/data';

import C from './styles';

export const Wrapped = ({
  children,
  bg = 'transparent',
  ...props
}: IWrappedLayout) => {
  const as = props.onPress && TouchableOpacity;
  return (
    <C.Wrapped
      {...{ as }}
      {...props}
      bg={bg}
      activeOpacity={Platform.OS === 'ios' ? 0.6 : 0.85}>
      {children}
    </C.Wrapped>
  );
};
