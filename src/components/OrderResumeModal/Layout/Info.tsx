import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { IcHouse } from '~/assets/svg';

import { IOrderResumeModalLayoutInfo } from '~/components/OrderResumeModal/data';

export const Info = (props: IOrderResumeModalLayoutInfo) => (
  <Wrapped>
    <Wrapped
      height={80}
      mb={2}
      bg="modals"
      variant="outback:fullRadius"
      justifyContent="center"
      pl={3}>
      <Text variant="outback:h4" mb={1}>{`Observações`}</Text>
      <Text variant="outback:body">{`Sem cebola no burguer.`}</Text>
    </Wrapped>
    {/*  */}
    <Wrapped
      height={80}
      mb={2}
      bg="modals"
      variant="outback:fullRadius"
      justifyContent="center"
      pl={3}>
      <Text variant="outback:h4" mb={1}>{`Pagamento`}</Text>
      <Wrapped flexDirection="row" alignItems="center">
        <Wrapped flexDirection="row" alignItems="center">
          <Wrapped height={14} width={22} bg="red" mr={0} />
          <Text>{`1567`}</Text>
        </Wrapped>
        <Wrapped flex={1} ml={2}>
          <Text variant="outback:body">{`Meu amor por comida.`}</Text>
        </Wrapped>
      </Wrapped>
    </Wrapped>
    {/*  */}
    <Wrapped
      height={143}
      bg="modals"
      variant="outback:fullRadius"
      pl={3}
      justifyContent="center">
      <Text variant="outback:h4" mb={1}>{`Entrega`}</Text>
      <Wrapped flexDirection="row" alignItems="center" mb={1}>
        <IcHouse />
        <Wrapped>
          <Text variant="outback:h8">{`Casa`}</Text>
        </Wrapped>
      </Wrapped>
      <Text
        variant="outback:body"
        mb={
          1
        }>{`Rua Primeiro de Maio, 345\nNiterói, Canoas/RS - 89090-990`}</Text>
    </Wrapped>
  </Wrapped>
);
