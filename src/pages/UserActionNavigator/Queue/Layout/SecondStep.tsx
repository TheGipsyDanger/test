import * as React from 'react';

import { Icon, Image, Text, Wrapped } from '~/components';
import { formatedDate } from '~/utils';

export const SecondStep = (props: any) => {
  const { t, backPress } = props;

  const data = new Date();

  return (
    <Wrapped>
      <Wrapped mx={3}>
        <Wrapped alignItems="flex-end" onPress={backPress}>
          <Icon name="times" lib="FontAwesome5" color="black" size={20} />
        </Wrapped>
        <Wrapped mb={2} alignItems="center">
          <Text color="text" variant="outback:desk">
            {t('ACTION.OUTBACK.QUEUE.STEP_2.CONFIRMED_QUEUE')}
          </Text>
        </Wrapped>
        <Wrapped mb={2} alignItems="center">
          <Text mt={1} variant="outback:h5">
            {t('ACTION.OUTBACK.QUEUE.STEP_2.TODAY')} | {formatedDate(data)}
          </Text>
        </Wrapped>
        <Wrapped onPress={() => alert('Ação 1')}>
          <Wrapped
            bg="background"
            height={127.7}
            borderRadius="fullImageList"
            alignItems="center"
            justifyContent="space-around"
            flexDirection="row"
            mb={2}>
            <Image
              borderRadius="fullImageList"
              width={78}
              height={78}
              uri="https://i.ibb.co/GxZbX08/Group-4347.png"
            />
            <Wrapped>
              <Wrapped alignItems="flex-start" mb={1}>
                <Text variant="outback:h4">
                  {t('ACTION.OUTBACK.QUEUE.STEP_2.QUEUE_POSITION')}
                  <Text variant="outback:title" color="primary">
                    10
                  </Text>
                </Text>
              </Wrapped>
              <Wrapped flexDirection="row" alignItems="center" mb={1}>
                <Text variant="outback:h4">
                  {t('ACTION.OUTBACK.QUEUE.STEP_2.WAIT')}
                </Text>
                <Text variant="outback:h4"> 30 minutos</Text>
              </Wrapped>
              <Text variant="outback:h5">Outback Shopping Iguatemi</Text>
            </Wrapped>
            <Wrapped alignItems="flex-end">
              <Icon
                name="chevron-right"
                lib="FontAwesome5"
                color="black"
                size={20}
              />
            </Wrapped>
          </Wrapped>
        </Wrapped>
        <Wrapped onPress={() => alert('Ação 2')}>
          <Wrapped
            height={127.7}
            bg="background"
            borderRadius="fullImageList"
            alignItems="center"
            justifyContent="space-around"
            flexDirection="row"
            mb={2}>
            <Image
              borderRadius="fullImageList"
              width={78}
              height={78}
              uri="https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg"
            />
            <Wrapped>
              <Text variant="outback:h4" mb={2}>
                {t('ACTION.OUTBACK.QUEUE.STEP_2.ROW_MENU')}
              </Text>
              <Text variant="outback:h5">
                {t('ACTION.OUTBACK.QUEUE.STEP_2.SEE_OPTIONS')}
              </Text>
            </Wrapped>
            <Wrapped alignItems="flex-end">
              <Icon
                name="chevron-right"
                lib="FontAwesome5"
                color="black"
                size={20}
              />
            </Wrapped>
          </Wrapped>
        </Wrapped>
        <Wrapped
          mb={2}
          bg="background"
          borderRadius="fullImageList"
          height={66}
          justifyContent="center">
          <Wrapped flexDirection="row" alignItems="center">
            <Text variant="outback:h4" ml={2}>
              Mesa para:
            </Text>
            <Text variant="outback:desk" ml={1}>
              Até 4 pessoas
            </Text>
          </Wrapped>
        </Wrapped>
        <Wrapped
          mb={2}
          bg="background"
          borderRadius="fullImageList"
          height={66}
          justifyContent="center">
          <Wrapped flexDirection="row" alignItems="center">
            <Text variant="outback:h4" ml={2}>
              {t('ACTION.OUTBACK.QUEUE.STEP_2.SITTING_OR_EATING')}:
            </Text>
            <Text variant="outback:desk" ml={1}>
              Sim
            </Text>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
