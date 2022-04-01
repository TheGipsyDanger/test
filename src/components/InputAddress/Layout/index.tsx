import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Input as InputBase } from '~/components/Basics/Input';

import { IcLocalization, IcClose } from '~/assets/svg';
import { IInputAddressLayout } from '~/components/InputAddress/data';

export const InputAddress = ({ address, setAddress }: IInputAddressLayout) => (
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
          placeholder="Rua, avenida, bairro, cep"
          height={40}
        />
      </Wrapped>
      <Wrapped onPress={() => null} ml={3} mr={2}>
        <IcClose />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
