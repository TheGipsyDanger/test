import * as React from 'react';

import { Wrapped, Spacing, Text } from '~/components';
import { Card } from './Card';

import { IProfileCard, interests } from '~/pages/AppNavigator/Profile/data';

export const Optional = ({ children }: IProfileCard) => (
  <Card>
    <Spacing space={4}>
      <Wrapped>
        <Text
          variant="outback:tabBar"
          mb={0}>{`Com qual gênero você se identifica?`}</Text>
        <Wrapped
          bg="background"
          height={40}
          borderRadius="tiny"
          px={3}
          justifyContent="center">
          <Text variant="outback:h4">{`Não binário`}</Text>
        </Wrapped>
      </Wrapped>
      <Wrapped>
        <Text variant="outback:tabBar" mb={0}>{`Você possui filhos?`}</Text>
        <Wrapped
          bg="background"
          height={40}
          borderRadius="tiny"
          px={3}
          justifyContent="center">
          <Text variant="outback:h4">{`Não tenho filhos`}</Text>
        </Wrapped>
      </Wrapped>
      <Wrapped mb={2}>
        <Wrapped mb={4}>
          <Text variant="outback:tabBar">{`Quais os seus interesses?`}</Text>
          <Wrapped flexDirection="row" flexWrap="wrap">
            {interests.map((item) => (
              <Wrapped
                key={item}
                p={1}
                my={0}
                mr={0}
                variant="outback:fullRadius"
                bg="background"
                center>
                <Text variant="outback:h4">{item}</Text>
              </Wrapped>
            ))}
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Spacing>
  </Card>
);
