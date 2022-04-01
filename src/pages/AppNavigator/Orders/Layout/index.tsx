import * as React from 'react';

import {
  Wrapped,
  Text,
  PromotionalSlider,
  Image,
  Button,
  Map,
  Icon,
} from '~/components';
import { goBack } from '~/utils';
import { IOrdersLayout } from '../data';

export const Orders = (props: IOrdersLayout) => {
  const { t } = props;

  return (
    <Wrapped>
      <Wrapped zIndex={1000} top={50} left={30} position="absolute">
        <Icon
          name="chevron-left"
          lib="FontAwesome5"
          color="black"
          size={20}
          onPress={() => goBack()}
        />
      </Wrapped>
      <PromotionalSlider radius={25} delay={5000} />
      <Wrapped
        mt={-2}
        bg="background"
        borderTopLeftRadius="fullImageList"
        borderTopRightRadius="fullImageList">
        <Wrapped mb={2} mt={2} alignItems="center">
          <Text color="primary" variant="outback:desk">
            Outback Shopping Iguatemi
          </Text>
          <Text mt={1} color="primary" variant="outback:h4">
            Av. Loureiro da Silva, 1670 - Belém Novo, Curitiba
          </Text>
        </Wrapped>
        <Wrapped padding={1} mb={16} borderRadius="fullImageList">
          <Map size={15} />
        </Wrapped>
      </Wrapped>
      <Wrapped
        padding={2}
        mt={-1}
        boxShadow="card"
        bg="background"
        borderRadius="fullImageList">
        <Wrapped
          bg="white"
          padding={2}
          borderRadius="fullImageList"
          alignItems="center">
          <Text mt={1} color="primary" variant="outback:XXG">
            10
          </Text>
          <Text mt={1} color="primary" variant="outback:h2">
            {t('ACTION.OUTBACK.ORDER.YOUR_POSITION')}
          </Text>
        </Wrapped>
        <Wrapped
          bg="white"
          padding={2}
          mt={2}
          borderRadius="fullImageList"
          alignItems="center">
          <Text mt={0} color="primary" variant="outback:body">
            {t('ACTION.OUTBACK.ORDER.YOUR_IDENTIFICATION')}
          </Text>
          <Text mt={0} color="primary" variant="outback:h7">
            Fernanda
          </Text>
        </Wrapped>
        <Wrapped px={4} mb={4} mt={3}>
          <Button
            height={50}
            onPress={() => alert('Sair da fila')}
            textVariant="outback:h2"
            text={`${t('ACTION.OUTBACK.ORDER.LEAVE_QUEUE')}`}
          />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
