import * as React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped, Conditional } from '~/components/Basics';
import { IcBack, IcSearchPlus } from '~/assets/svg';

import { IItemModalHeader } from '~/components/ItemDetaislModal/data';

export const Header = ({ firstFunction, secondFunction }: IItemModalHeader) => {
  const insets = useSafeAreaInsets();

  return (
    <Wrapped
      top={Platform.OS === 'ios' ? insets?.top : insets?.top + 25}
      right={25}
      left={25}
      position="absolute"
      variant="outback:row:center"
      justifyContent="space-between">
      <Conditional render={firstFunction !== undefined}>
        <Wrapped onPress={firstFunction}>
          <Wrapped
            height={36}
            width={36}
            bg="primary"
            borderRadius="circle"
            center>
            <IcBack />
          </Wrapped>
        </Wrapped>
        <Wrapped />
      </Conditional>
      <Conditional render={secondFunction !== undefined}>
        <Wrapped onPress={secondFunction}>
          <Wrapped
            height={36}
            width={36}
            bg="secondary"
            borderRadius="icon"
            center>
            <IcSearchPlus />
          </Wrapped>
        </Wrapped>
        <Wrapped />
      </Conditional>
    </Wrapped>
  );
};
