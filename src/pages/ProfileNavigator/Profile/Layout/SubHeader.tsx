import * as React from 'react';

import { Wrapped, Text, Conditional, Button } from '~/components';

import { IProfileSubHeader } from '~/pages/ProfileNavigator/Profile/data';

export const SubHeader = ({ user, openLogin }: IProfileSubHeader) => (
  <Wrapped
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    my={3}>
    <Wrapped flex={1}>
      <Text variant="outback:h7" numberOfLines={1}>
        {user?.name ? `Hello Mate ${user.name}!` : `Hello Mate!`}
      </Text>
    </Wrapped>
    <Conditional render={!user?.name}>
      <Wrapped width={134}>
        <Button
          height={40}
          onPress={openLogin}
          textVariant="outback:h2"
          text="Fazer login"
        />
      </Wrapped>
    </Conditional>
  </Wrapped>
);
