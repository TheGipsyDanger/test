import * as React from 'react';

import { Input as InputBase, Wrapped } from '~/components';

import { IcLocalization, IcClose } from '~/assets/svg';
import { IUserActionLayoutInput } from '~/pages/UserActionNavigator/UserAction/data';

export const Input = ({ address, setAddress }: IUserActionLayoutInput) => (
  <Wrapped>
    <Wrapped
      flexDirection="row"
      alignItems="center"
      bg="background"
      borderRadius="button"
      justifyContent="space-between">
      <Wrapped ml={2} mr={3}>
        <IcLocalization />
      </Wrapped>
      <Wrapped flex={1}>
        <InputBase
          value={address}
          onChange={setAddress}
          size="h5"
          font="regular"
          placeholder="Ex: Av. teste"
          height={40}
        />
      </Wrapped>
      <Wrapped onPress={() => null} ml={3} mr={2}>
        <IcClose />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
