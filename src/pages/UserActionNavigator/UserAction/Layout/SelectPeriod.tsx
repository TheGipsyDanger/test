import * as React from 'react';

import { Wrapped, Text } from '~/components';
import { IcArrowDown, IcArrowUp } from '~/assets/svg';

import { IUserActionSelectPeiod } from '~/pages/UserActionNavigator/UserAction/data';
import S from './styles';

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
      height={66}
      bg="background"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Text variant="outback:h2">{text}</Text>
      <Wrapped width={33} height={33} bg="primary" borderRadius="circle" center>
        {isOpen ? (
          <IcArrowUp color="moldals" />
        ) : (
          <IcArrowDown color="moldals" />
        )}
      </Wrapped>
    </Wrapped>
  );
};
