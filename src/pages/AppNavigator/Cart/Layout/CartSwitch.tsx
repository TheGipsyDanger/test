import * as React from 'react';
import { Switch } from 'react-native';

import { colors } from '~/styles/Theme';

import { Text, Wrapped } from '~/components';

import { ICartSwitch } from '~/pages/AppNavigator/Cart/data';

export const CartSwitch = ({ t, toggle, setToogle, ...props }: ICartSwitch) => {
  return (
    <Wrapped {...props}>
      <Text mb={3} variant="outback:h4">
        {t('CART.STEP_1.OPT')}
      </Text>
      <Wrapped
        height={40}
        variant="outback:card:row:space"
        borderRadius="fullImageList"
        bg="modals">
        <Text ml={3} variant="outback:h2">
          {t('CART.STEP_1.CUTLERY')}
        </Text>
        <Wrapped ml={1} mr={1}>
          <Switch
            trackColor={{
              false: colors['background'],
              true: colors['primary'],
            }}
            thumbColor={colors['white']}
            ios_backgroundColor={colors['background']}
            onValueChange={setToogle}
            value={toggle}
          />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
