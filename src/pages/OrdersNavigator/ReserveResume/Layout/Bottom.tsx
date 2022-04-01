import * as React from 'react';

import { Wrapped, Text, Conditional } from '~/components';

import { IStatusLayoutBottom } from '~/pages/OrdersNavigator/Status/data';

import { IcWhitePhone, IcWhiteWhats } from '~/assets/svg';

const Button = ({ onPress, label, ...props }: any) => (
  <Wrapped {...{ onPress }} flex={1}>
    <Wrapped
      height={40}
      flex={1}
      center
      borderRadius="circle"
      flexDirection="row"
      {...props}>
      <Conditional render={label === 'Telefone'}>
        <IcWhitePhone />
        <IcWhiteWhats />
      </Conditional>
      <Text ml={1} variant="outback:h2" color="modals">
        {label}
      </Text>
    </Wrapped>
  </Wrapped>
);

export const Bottom = ({ openPhone, openWhats }: IStatusLayoutBottom) => (
  <Wrapped my={0} minHeight={130}>
    <Wrapped my={4}>
      <Text mb={1} variant="outback:desk">{`Falar com o restaurante`}</Text>
      <Wrapped flexDirection="row" height={40}>
        <Button onPress={openPhone} label="Telefone" bg="secondary" />
        <Wrapped width={15} />
        <Button onPress={openWhats} label="WhatsApp" bg="success" />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
