import * as React from 'react';

import { Wrapped, Text, Conditional } from '~/components';
import { IcHouse } from '~/assets/svg';

export const Info = ({ where }: any) => {
  const isDelivery = where === 'delivery';
  return (
    <Wrapped>
      <Wrapped
        height={80}
        mb={2}
        bg="background"
        variant="outback:fullRadius"
        justifyContent="center"
        pl={3}>
        <Text variant="outback:h4" mb={1}>{`Observações`}</Text>
        <Text variant="outback:body">{`Sem cebola no burguer.`}</Text>
      </Wrapped>
      {/*  */}
      <Wrapped
        mb={2}
        height={143}
        bg="background"
        variant="outback:fullRadius"
        pl={3}
        justifyContent="center">
        <Text variant="outback:h4" mb={1}>
          {isDelivery ? `Entrega` : `Retirar`}
        </Text>
        <Wrapped flexDirection="row" alignItems="center" mb={1}>
          <Conditional render={isDelivery}>
            <IcHouse />
          </Conditional>
          <Wrapped>
            <Text variant="outback:h8">
              {isDelivery ? `Casa` : `Outback Shopping Iguatemi Porto Alegre`}
            </Text>
          </Wrapped>
        </Wrapped>
        <Text
          mb={1}
          variant="outback:body">{`Rua Primeiro de Maio, 345\nNiterói, Canoas/RS - 89090-990`}</Text>
      </Wrapped>
      {/*  */}
      <Wrapped
        height={80}
        bg="background"
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
    </Wrapped>
  );
};
