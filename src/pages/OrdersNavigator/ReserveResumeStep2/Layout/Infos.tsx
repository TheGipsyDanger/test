import * as React from 'react';
import { Image } from 'react-native';

import { Wrapped, Spacing, Button, Text } from '~/components';
import { reserve } from '~/assets/images';

import { IReserveResumeStep2Layout } from '~/pages/OrdersNavigator/ReserveResumeStep2/data';

import S from './styles';

export const Infos = ({ cancelOpen }: any) => (
  <Wrapped flex={1} p={3}>
    <Wrapped mb={3}>
      <Spacing space={2}>
        <S.Content minHeight={100} flexDirection="row" center px={2}>
          <Image
            source={reserve}
            style={{
              width: 109,
              height: 66,
            }}
          />
          <Wrapped flex={1}>
            <Text
              mb={1}
              variant="outback:h2"
              textAlign="center"
              color="primary">{`Reserva`}</Text>
            <Wrapped mx={1} height={1} bg="primary" mb={1} />
            <Text
              variant="outback:h3"
              textAlign="center"
              color="primary">{`Venha comer no Outback!`}</Text>
          </Wrapped>
        </S.Content>
        <S.Content minHeight={66} flexDirection="row">
          <Wrapped flex={1} center>
            <Text variant="outback:h4" color="primary">{`Mesa para:`}</Text>
            <Text variant="outback:title" color="primary">{`2 - 4`}</Text>
          </Wrapped>
          <Wrapped bg="inactive" width={1} height={32} alignSelf="center" />
          <Wrapped flex={1} center>
            <Text
              variant="outback:h4"
              color="primary">{`Horário agendado:`}</Text>
            <Text variant="outback:title" color="primary">{`15:30`}</Text>
          </Wrapped>
        </S.Content>
      </Spacing>
    </Wrapped>
    <Wrapped center>
      <Wrapped width={208} mb={4}>
        <Button
          height={40}
          onPress={cancelOpen}
          textVariant="outback:h2"
          text={'Cancelar Reserva'}
        />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
