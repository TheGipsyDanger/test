import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped } from '~/components';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { Card } from './Card';

import { IProfileLayout } from '~/pages/ProfileNavigator/Profile/data';

export const Profile = ({
  pressItem,
  profileOptions,
  ...props
}: IProfileLayout) => (
  <Wrapped flex={1}>
    <Header />
    <Wrapped flex={1} mx={4}>
      <FlatList
        ListHeaderComponent={<SubHeader {...props} />}
        data={profileOptions}
        extraData={profileOptions}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Wrapped onPress={() => pressItem(item.icon)}>
            <Card opacity={item.enabled ? 1 : 0.7} {...item} mb={3} />
          </Wrapped>
        )}
      />
    </Wrapped>
  </Wrapped>
);
