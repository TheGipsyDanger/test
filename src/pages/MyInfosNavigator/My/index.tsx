import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { useUser, useModal } from '~/context';

import {
  IProfile,
  IProfileInfoState,
  profilePersonFiles,
  profileContactFiles,
  profileOptionsFiles,
} from '~/pages/MyInfosNavigator/My/data';
import { Profile as Layout } from './Layout';

export const My = (props: IProfile) => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { openModal } = useModal();

  const [infosState, setInfosState] = useState<IProfileInfoState>({
    person: false,
    contact: false,
    permissions: false,
    optional: false,
  });

  const { goBack } = useNavigation();

  function updateInfosState(value: string) {
    setInfosState((prev) => ({
      ...prev,
      [value]: !prev[value as keyof IProfileInfoState],
    }));
  }

  function onPress() {
    return openModal('AzureEditModal');
  }

  const layoutProps = {
    ...props,
    t,
    user,
    goBack,
    onPress,
    infosState,
    updateInfosState,
    profilePerson: profilePersonFiles,
    profileContact: profileContactFiles,
    profileOptions: profileOptionsFiles,
  };

  return <Layout {...layoutProps} />;
};
