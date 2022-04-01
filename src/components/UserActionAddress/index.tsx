import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { IAddressType, createAddressDisplayFactory } from '~/utils';

import { useUserAction } from '~/context';

import { IUserActionAddress } from '~/components/UserActionAddress/data';
import { UserActionAddress as Layout } from './Layout';

export const UserActionAddress = (props: IUserActionAddress) => {
  const AddressFactory = createAddressDisplayFactory();

  const { t } = useTranslation();

  const { addressTypes, setAddressTypes } = useUserAction();

  function pressAddress(index: number) {
    const { data } = AddressFactory.selectAddress(addressTypes, index);
    setAddressTypes(data as IAddressType[]);
  }

  const layoutProps = {
    ...props,
    t,
    pressAddress,
    data: addressTypes,
  };

  return <Layout {...layoutProps} />;
};
