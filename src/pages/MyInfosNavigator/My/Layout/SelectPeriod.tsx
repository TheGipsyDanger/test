import * as React from 'react';

import { Wrapped, Text } from '~/components';
import { IcArrowDown, IcArrowUp } from '~/assets/svg';

import { IUserActionSelectPeiod } from '~/pages/UserActionNavigator/UserAction/data';

export const SelectPeriod = ({
  text,
  isOpen = false,
}: IUserActionSelectPeiod) => {
  const customProps = isOpen
    ? { borderTopLeftRadius: 'card', borderTopRightRadius: 'card' }
    : { borderRadius: 'card' };
  return (
    <Wrapped
      {...customProps}
      px={2}
      height={64}
      bg="modals"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Text variant="outback:desk">{text}</Text>
      <Wrapped width={33} height={33} borderRadius="circle" center>
        {isOpen ? <IcArrowUp color="TEXT" /> : <IcArrowDown color="TEXT" />}
      </Wrapped>
    </Wrapped>
  );
};
