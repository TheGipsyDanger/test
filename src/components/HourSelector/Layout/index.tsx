import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Text } from '~/components/Basics';

import { metrics, theme } from '~/styles';

const widthToUse = metrics.width - theme.space[12];

import { IHourSelectorLayout } from '~/components/HourSelector/data';

export const HourSelector = ({
  keys,
  press,
  selectedHour,
}: IHourSelectorLayout) => (
  <Wrapped bg="background" py={2} px={2} borderBottomLeftRadius="card">
    <FlatList
      data={keys}
      numColumns={4}
      extraData={keys}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        const isSelected = item === selectedHour;
        return (
          <Wrapped onPress={() => press(item)}>
            <Wrapped
              borderRadius="icon"
              height={45}
              width={widthToUse / 4}
              p={0}>
              <Wrapped
                bg={isSelected ? 'primary' : 'modals'}
                borderRadius="icon"
                center
                flex={1}>
                <Text
                  color={isSelected ? 'modals' : 'text'}
                  variant="outback:h8">
                  {item}
                </Text>
              </Wrapped>
            </Wrapped>
          </Wrapped>
        );
      }}
    />
  </Wrapped>
);
