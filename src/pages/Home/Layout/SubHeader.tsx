import * as React from 'react';

import { Wrapped, Text, Icon } from '~/components';
import { Button } from './Button';

export const SubHeader = () => {
  return (
    <Wrapped mx={3} mb={2}>
      <Wrapped mb={2} mt={1} flexDirection="row" justifyContent="space-between">
        <Text variant="outback:h2" color="primary">
          Hello Mates!
        </Text>
        <Icon name="search" lib="FontAwesome5" color="primary" size={18} />
      </Wrapped>
      <Wrapped flexDirection="row" justifyContent="space-between">
        <Button width={100} label="Entrar na fila" />
        <Button width={100} label="Gift card" />
        <Button width={100} label="Fidelidade" />
      </Wrapped>
    </Wrapped>
  );
};
