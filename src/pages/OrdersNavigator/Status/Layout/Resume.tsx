import * as React from 'react';

import { Wrapped, Text } from '~/components';

import { IOrderResumeModalLayoutResume } from '~/components/OrderResumeModal/data';

export const Resume = (props: any) => (
  <Wrapped mb={4} p={3} bg="background" borderRadius="card">
    <Wrapped>
      <Text variant="outback:h4">{`Resumo do pedido`}</Text>
      {/*  */}
      <Wrapped mb={4}>
        <Wrapped flexDirection="row" mt={4}>
          <Wrapped flex={1} mb={3}>
            <Text
              variant="outback:h8"
              numberOfLines={1}>{`2x Jackaroo Ribs And Steak`}</Text>
          </Wrapped>
          <Text variant="outback:por" mr={1}>{`2x R$ 39,25`}</Text>
          <Text variant="outback:h5">{`R$ 78,50`}</Text>
        </Wrapped>
        <Wrapped ml={4}>
          <Wrapped flexDirection="row" mb={1} alignItems="center">
            <Wrapped flex={1}>
              <Text variant="outback:h6">{`2x Cebola`}</Text>
            </Wrapped>
            <Text variant="outback:por">{`2x R$ 3,00`}</Text>
            <Text variant="outback:h6" ml={1}>{`R$ 9,00`}</Text>
          </Wrapped>
          <Wrapped flexDirection="row" mb={1} alignItems="center">
            <Wrapped flex={1}>
              <Text variant="outback:h6">{`1x Refrigerante`}</Text>
            </Wrapped>
            <Text variant="outback:por">{`R$ 8,00`}</Text>
          </Wrapped>
          <Wrapped
            height={30}
            bg="modals"
            justifyContent="center"
            borderRadius="circle">
            <Text variant="outback:por" ml={2}>{`Sem sal`}</Text>
          </Wrapped>
        </Wrapped>
      </Wrapped>
      {/*  */}
      <Wrapped flexDirection="row" justifyContent="space-between" mb={1}>
        <Text variant="outback:h8">{`Desconto`}</Text>
        <Text variant="outback:h5">{`- R$ 9,00`}</Text>
      </Wrapped>
      <Wrapped flexDirection="row" justifyContent="space-between" mb={4}>
        <Text variant="outback:h8">{`Taxa de entrega`}</Text>
        <Text variant="outback:h5">{`R$ 11,99`}</Text>
      </Wrapped>
      {/*  */}
      <Wrapped height={1} bg="inactive" mb={3} />
      {/*  */}
      <Wrapped flexDirection="row" justifyContent="space-between">
        <Text variant="outback:h7">{`Total`}</Text>
        <Text variant="outback:h7">{`R$ 250,00`}</Text>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
