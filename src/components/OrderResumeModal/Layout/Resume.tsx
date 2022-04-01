import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IOrderResumeModalLayoutResume } from '~/components/OrderResumeModal/data';

export const Resume = (props: IOrderResumeModalLayoutResume) => (
  <Wrapped flex={1} mb={4}>
    <Wrapped mb={4}>
      <Wrapped mb={2}>
        <Wrapped mb={4}>
          <Text mb={0} variant="outback:h2">{`Pedido nº 2558`}</Text>
        </Wrapped>
        <Wrapped>
          <Text
            variant="outback:h4"
            mb={1}>{`Qua, 07 de outubro de 2021`}</Text>
          <Wrapped flexDirection="row">
            <Wrapped flex={1}>
              <Text variant="outback:h4">{`Realizado às 22:54`}</Text>
            </Wrapped>
            <Wrapped flex={1}>
              <Text variant="outback:h4">{`Concluído às 00:13`}</Text>
            </Wrapped>
          </Wrapped>
        </Wrapped>
      </Wrapped>
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
