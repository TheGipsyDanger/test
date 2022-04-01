import * as React from 'react';
import { Switch } from 'react-native';

import { Wrapped, Spacing, Text } from '~/components';
import { Card } from './Card';

import { colors } from '~/styles/Theme';

import { IProfileCard, permissions } from '~/pages/AppNavigator/Profile/data';

export const Permissions = ({ children }: IProfileCard) => (
  <Card>
    <Spacing space={4}>
      {permissions.map((item) => (
        <Wrapped key={item} flexDirection="row" center>
          <Wrapped flex={2} mr={2}>
            <Text variant="outback:h4">{item}</Text>
          </Wrapped>
          <Switch
            trackColor={{
              false: colors['background'],
              true: colors['primary'],
            }}
            thumbColor={colors['white']}
            ios_backgroundColor={colors['background']}
            onValueChange={() => {}}
            value={true}
          />
        </Wrapped>
      ))}
    </Spacing>
    <Wrapped height={30} />
  </Card>
);
