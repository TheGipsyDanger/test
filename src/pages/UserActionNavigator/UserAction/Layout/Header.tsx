import * as React from 'react';

import { Wrapped } from '~/components/Basics';
import { Map } from '~/components';
import { IcBack } from '~/assets/svg';

import { IUserActionHeader } from '~/pages/UserActionNavigator/UserAction/data';

export const Header = ({ backPress, top, openMap }: IUserActionHeader) => (
  <>
    <Map size={32} />
    <Wrapped position="absolute" top={top} ml={4} width={32} height={32}>
      <Wrapped onPress={backPress} flex={1}>
        <IcBack color="text" />
      </Wrapped>
    </Wrapped>
  </>
);
