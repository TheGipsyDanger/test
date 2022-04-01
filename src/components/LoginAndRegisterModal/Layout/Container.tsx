import * as React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Conditional } from '~/components/Basics/Conditional';
import { equivalent } from '~/utils';
import { metrics } from '~/styles/metrics';

import { IContainer } from '~/components/LoginAndRegisterModal/data';

export const Container = ({
  isShow,
  children,
  keyboardHeight,
  modalSizes: { height },
}: IContainer) => {
  const { isIos } = metrics;
  return (
    <Conditional render={isIos}>
      <Wrapped
        px={1}
        height={equivalent(height, 91)}
        testID={`RequestLocationModal:Welcome`}>
        <Wrapped flex={1} bg="modals" variant="outback:topRadius">
          <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset={height - equivalent(height, 91) + 10}>
              {children}
            </KeyboardAvoidingView>
          </SafeAreaView>
        </Wrapped>
      </Wrapped>
      {/*  */}
      <Wrapped
        px={1}
        height={
          isShow
            ? equivalent(height, 91) - keyboardHeight
            : equivalent(height, 91)
        }
        testID={`RequestLocationModal:Welcome`}>
        <Wrapped flex={1} bg="modals" variant="outback:topRadius">
          {children}
        </Wrapped>
      </Wrapped>
    </Conditional>
  );
};
