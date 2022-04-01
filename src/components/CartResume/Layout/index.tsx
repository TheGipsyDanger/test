import * as React from 'react';

import { Wrapped, Text, Conditional, Button } from '~/components/Basics';
import { Header } from './Header';
import { Body } from './Body';

import { IcArrowDown, IcEmptyCart } from '~/assets/svg';

import { ICartResumeLayout } from '~/components/CartResume/data';
import { ScrollView } from 'react-native-gesture-handler';

export const CartResume = (props: ICartResumeLayout) => {
  const { t, bottom, onClose, data, where = 'cart' } = props;

  return (
    <Wrapped flex={1} mx={4} variant="outback:topRadius">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapped
          center
          my={2}
          onPress={onClose}
          hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}>
          <IcArrowDown />
        </Wrapped>
        <Conditional render={data.length > 0}>
          <Wrapped>
            <Header {...props} />
            <Body {...props} />
          </Wrapped>
          <Wrapped>
            <Header {...props} fullInfo={false} />
            <Wrapped>
              <Wrapped mt={4} mb={4} center>
                <IcEmptyCart size="large" />
                <Wrapped mt={2} mb={1} height={58}>
                  <Text textAlign="center" variant="outback:h7">
                    {t('CART.STEP_1.EMPTY_LIST')}
                  </Text>
                </Wrapped>
              </Wrapped>
              <Button
                variant="outback:disabled"
                height={55}
                onPress={() => {}}
                textVariant="outback:h2"
                text={
                  where === 'cart'
                    ? t('CART.RESUME.BTN')
                    : t('CART.RESUME.BTN_2')
                }
              />
            </Wrapped>
          </Wrapped>
        </Conditional>
        <Wrapped height={bottom} />
      </ScrollView>
    </Wrapped>
  );
};
