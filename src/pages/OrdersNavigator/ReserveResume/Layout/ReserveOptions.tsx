import * as React from 'react';

import { Wrapped, Text, Image } from '~/components';

import { IcArrowRight } from '~/assets/svg';

import { IReserveResumeLayoutOptions } from '~/pages/OrdersNavigator/ReserveResume/data';

export const ReserveOptions = ({
  t,
  optionPress,
}: IReserveResumeLayoutOptions) => (
  <Wrapped onPress={optionPress}>
    <Wrapped
      boxShadow="card"
      p={3}
      variant="outback:fullRadius"
      bg="modals"
      height={115}>
      <Wrapped flexDirection="row">
        <Wrapped flexDirection="row" flex={1}>
          <Image
            borderRadius="fullImageList"
            width={75}
            height={75}
            uri="https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg"
          />
          <Wrapped ml={3} justifyContent="center">
            <Text variant="outback:h2" mb={0}>{`Cardápio`}</Text>
            {/* FALTA A VARIANT NO FIGMA */}
            <Text size="tabBar">{`Que tal ir vendo\nas nossas opções?`}</Text>
          </Wrapped>
        </Wrapped>
        <Wrapped justifyContent="center">
          <IcArrowRight />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
