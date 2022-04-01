import * as React from 'react';

import { Wrapped, Text, Conditional } from '~/components/Basics';
import { colors } from '~/styles/Theme';
import { metrics } from '~/styles';
import { IStringToAnyMap } from '~/utils';

import { IcMenu, IcBag, IcRequests, IcProfile } from '~/assets/svg';
import { ITabIconLayout } from '~/components/TabIcon/data';

export const TabIcon = ({ name, focused, title, count }: ITabIconLayout) => {
  const icons: IStringToAnyMap = {
    Menu: <IcMenu color={focused ? colors.primary : colors.inactive} />,
    Cart: <IcBag color={focused ? colors.primary : colors.inactive} />,
    Orders: <IcRequests color={focused ? colors.primary : colors.inactive} />,
    Profile: <IcProfile color={focused ? colors.primary : colors.inactive} />,
  };

  return (
    <Wrapped width={metrics.width / 4} center height={56} testID={`TabIcon`}>
      <Conditional render={name === 'Cart' && count > 0 && !focused}>
        <Wrapped
          top={2}
          right={metrics.width / 4 / 4}
          bg="primary"
          position="absolute"
          width={18}
          height={18}
          center
          borderRadius="card">
          <Text color="modals">{count}</Text>
        </Wrapped>
      </Conditional>
      <Wrapped height={30}>{icons[name]}</Wrapped>
      <Text variant="outback:h6" color={focused ? 'primary' : 'inactive'}>
        {title}
      </Text>
    </Wrapped>
  );
};
