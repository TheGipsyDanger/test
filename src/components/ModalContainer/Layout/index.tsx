import * as React from 'react';

import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Conditional } from '~/components/Basics/Conditional';

import { IModalContainerLayout } from '~/components/ModalContainer/data';

export const ModalContainer = ({
  isShow,
  isIos,
  children,
  size = 100,
  modalSize,
  androidModalSize,
  noTop = true,
  isCenter = false,
  hasSafeArea = true,
  keyboardVerticalOffset,
  variant = 'outback:topRadius',
  ...props
}: IModalContainerLayout) => {
  return (
    <Conditional render={isIos}>
      <Wrapped {...props} height={modalSize} testID={`ModalContainer`}>
        <Wrapped flex={1} bg="modals" variant={variant}>
          <Conditional render={hasSafeArea}>
            <SafeAreaView style={{ flex: 1 }}>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                keyboardVerticalOffset={keyboardVerticalOffset}>
                {children}
              </KeyboardAvoidingView>
            </SafeAreaView>
            <Wrapped flex={1} {...(noTop ? { mt: 4 } : {})}>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                keyboardVerticalOffset={keyboardVerticalOffset}>
                {children}
              </KeyboardAvoidingView>
            </Wrapped>
          </Conditional>
        </Wrapped>
      </Wrapped>
      {/*  */}
      <Wrapped {...props} height={androidModalSize}>
        <Wrapped flex={1} bg="modals" variant={variant}>
          {children}
        </Wrapped>
      </Wrapped>
    </Conditional>
  );
};
