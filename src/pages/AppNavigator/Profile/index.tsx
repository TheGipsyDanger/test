import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useModal } from '~/context';
import {
  useProfilePersonForm,
  useProfileContactForm,
  defineFields,
} from '~/utils';

import { IProfile, IProfileInfoState } from '~/pages/AppNavigator/Profile/data';
import { Profile as Layout } from './Layout';

export const Profile = (props: IProfile) => {
  const [infosState, setInfosState] = useState<IProfileInfoState>({
    person: false,
    contact: false,
    permissions: false,
    optional: false,
  });

  const navigation = useNavigation();
  const { openModal } = useModal();

  const profilePersonForm = useProfilePersonForm(() => {});
  const profileContactForm = useProfileContactForm(() => {});

  function updateInfosState(value: string) {
    setInfosState((prev) => ({
      ...prev,
      [value]: !prev[value as keyof IProfileInfoState],
    }));
  }

  function openLogin() {
    openModal('AzureLoginAndRegisterModal');
  }

  function press() {
    return navigation.navigate('UserActionNavigator');
  }

  const layoutProps = {
    ...props,
    press,
    openLogin,
    infosState,
    updateInfosState,
    profilePersonForm,
    profileContactForm,
    profileContactFormFields: defineFields(
      Object.keys(profileContactForm.values)
    ),
    profilePersonFormFields: defineFields(
      Object.keys(profilePersonForm.values)
    ),
  };

  return <Layout {...layoutProps} />;
};
