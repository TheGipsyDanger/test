import * as React from 'react';

import { Wrapped, Text, Conditional, Spacing } from '~/components/Basics';
import { IcArrowDown } from '~/assets/svg';

import { IOrderStatusLayout } from '~/components/OrderStatus/data';

import S from './styles';

const StatusReport = ({ label }: any) => (
  <Wrapped flexDirection="row">
    <Wrapped
      overflow="hidden"
      bg="modals"
      width={20}
      alignItems="center"
      justifyContent="center">
      <S.Circle bg="inactive" size={10} />
    </Wrapped>
    <Wrapped>
      <Text ml={2} variant="outback:h6">
        {label}
      </Text>
    </Wrapped>
  </Wrapped>
);

export const OrderStatus = ({ data, toggle, isOpen }: IOrderStatusLayout) => (
  <Wrapped onPress={toggle}>
    <S.Container>
      <Wrapped overflow="hidden">
        <S.Row mb={1}>
          <S.Row>
            <Conditional render={isOpen}>
              <Wrapped
                position="absolute"
                top={1}
                left={9}
                width={2}
                height={1000}
                bg="inactive"
              />
            </Conditional>
            <S.Circle bg="primary" size={20} center>
              <S.Circle bg="active" size={12} />
            </S.Circle>
            <Text
              ml={2}
              variant="outback:desk"
              color="primary">{`Pedido em produção`}</Text>
          </S.Row>
          <IcArrowDown />
        </S.Row>
        <Wrapped>
          <S.Left>
            <Conditional render={isOpen}>
              <Text>{`Seu momento Outback está indo até você!`}</Text>
              <Text>{`Estamos preparando o seu pedido!`}</Text>
            </Conditional>
          </S.Left>
          <Conditional render={isOpen}>
            <Wrapped>
              <S.Left>
                <Text mt={1}>{`21:48`}</Text>
                <Wrapped height={1} my={3} bg="inactive" />
              </S.Left>
              <Spacing space={2}>
                <StatusReport label={'21:29 Pedido em produção'} />
                <StatusReport label={`21:29 Pedido em produção`} />
                <StatusReport
                  label={`21:24 Pedido recebido pelo restaurante`}
                />
              </Spacing>
            </Wrapped>
          </Conditional>
        </Wrapped>
      </Wrapped>
    </S.Container>
  </Wrapped>
);
