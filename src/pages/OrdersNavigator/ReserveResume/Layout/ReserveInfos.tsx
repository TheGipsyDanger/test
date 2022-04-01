import * as React from 'react';

import { Wrapped, Text, Spacing } from '~/components';
import { IElementMap } from '~/utils';

import {
  IcArrowRight,
  IcTinyClock,
  IcTinyLocation,
  IcTinyPerson,
} from '~/assets/svg';

import {
  IReserveResumeLayoutInfos,
  IRow,
} from '~/pages/OrdersNavigator/ReserveResume/data';

const icons: IElementMap = {
  location: <IcTinyLocation />,
  clock: <IcTinyClock />,
  person: <IcTinyPerson />,
};

const Row = ({ icon, text }: IRow) => (
  <Wrapped flexDirection="row" alignItems="center">
    <Wrapped>{icons[icon as keyof IRow]}</Wrapped>
    <Text ml={1} variant="outback:body" numberOfLines={1}>
      {text}
    </Text>
  </Wrapped>
);

export const ReserveInfos = ({
  t,
  reservePress,
}: IReserveResumeLayoutInfos) => (
  <Wrapped onPress={reservePress}>
    <Wrapped
      boxShadow="card"
      variant="outback:fullRadius"
      bg="modals"
      justifyContent="center"
      minHeight={177}
      p={3}
      mb={2}>
      <Wrapped flexDirection="row">
        <Wrapped flex={1}>
          <Text variant="outback:h2" mb={2}>{`Reserva #92234`}</Text>
          <Wrapped mb={1}>
            <Spacing space={0}>
              <Row
                icon="location"
                text="Outback Shopping Iguatemi Porto Alegre"
              />
              <Row icon="clock" text="Qua, 14/06 - 15:30" />
              <Row icon="person" text="2 - 4" />
            </Spacing>
          </Wrapped>
          <Wrapped>
            <Text variant="outback:body" mb={0}>{`Mezanino`}</Text>
            <Text variant="outback:body">{`Observação: Será um aniversário`}</Text>
          </Wrapped>
        </Wrapped>
        <Wrapped justifyContent="center">
          <IcArrowRight />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
