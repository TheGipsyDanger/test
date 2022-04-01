import * as React from 'react';
import { Platform } from 'react-native';

import { Wrapped } from '~/components/Basics/Wrapped';

import { IPageLayout } from '~/components/Basics/Page/data';
import * as C from './styles';

export const Page = ({ children, bg = 'white', ...props }: IPageLayout) => {
  return (
    <C.SafeAreaStyled bg={bg}>
      <C.KeyboardAvoidStyled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Wrapped flex={1} bg={bg} {...props}>
          {children}
        </Wrapped>
      </C.KeyboardAvoidStyled>
    </C.SafeAreaStyled>
  );
};
