import * as React from 'react';
import { memo } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Wrapped } from '~/components/Basics/Wrapped';

import { IIndicator } from '~/components/PromotionalSlider/data';

export const Indicator = memo(
  ({ isSelect, indicatorImages, position = 'bottom' }: IIndicator) => (
    <Wrapped
      testID={`PromotionalSlider:Indicator`}
      position="absolute"
      {...(position === 'bottom'
        ? { bottom: 40 }
        : {
            top:
              Platform.OS === 'android'
                ? useSafeAreaInsets().top + 20
                : useSafeAreaInsets().top,
          })}
      right={0}
      left={0}
      flexDirection="row"
      center>
      {indicatorImages.map((_, index) => (
        <Wrapped key={index} testID={'PromotionalSlider:Indicator.Item'}>
          <Wrapped
            mx={1}
            height={3}
            width={24}
            borderRadius={'slider'}
            bg={isSelect(index) ? 'active' : 'inactive'}
          />
        </Wrapped>
      ))}
    </Wrapped>
  )
);
