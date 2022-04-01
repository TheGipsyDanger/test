import * as React from 'react';

import { Wrapped, Text, Icon } from '~/components';
import { Button } from './Button';

import { IMenuSubheader } from '~/pages/AppNavigator/Menu/data';

export const SubHeader = ({ user, press }: IMenuSubheader) => (
  <Wrapped mx={3} mb={3}>
    <Wrapped
      mb={2}
      mt={3}
      mx={0}
      flexDirection="row"
      justifyContent="space-between">
      <Text variant="outback:h2" color="primary">
        {user?.name === undefined ? 'Helllo Mates!' : `Hello Mate ${user.name}`}
      </Text>
      <Icon name="search" lib="FontAwesome5" color="primary" size={18} />
    </Wrapped>
    <Wrapped flexDirection="row" justifyContent="space-between">
      <Button width={100} {...{ press }} label="Entrar na fila" />
      <Button width={100} {...{ press }} label="Gift card" />
      <Button width={100} {...{ press }} label="Fidelidade" />
    </Wrapped>
  </Wrapped>
);
