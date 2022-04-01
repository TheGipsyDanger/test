import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useModal, useUser } from '~/context';
import { IFunctionMap, createUserOptionFactory, IUser } from '~/utils';

import {
  IProfile,
  defineOptions,
  profileOptions,
} from '~/pages/ProfileNavigator/Profile/data';
import { Profile as Layout } from './Layout';

export const Profile = (props: IProfile) => {
  const { cleanUser } = createUserOptionFactory();
  const { navigate } = useNavigation();

  const { user, setUser } = useUser();
  const { openModal } = useModal();

  function openLogin() {
    return openModal('AzureLoginAndRegisterModal');
  }

  function pressItem(value: string) {
    const isLogged = user.name !== undefined;

    const options: IFunctionMap = {
      person: () => goToMyInfos(isLogged),
      default: () => alert('Em breve'),
      logout: () => logout(),
    };

    const fn = options[value] || options['default'];
    return fn();
  }

  function logout() {
    setUser({} as IUser);
    cleanUser();
  }

  function goToMyInfos(isLogged: boolean) {
    return isLogged ? navigate('My') : () => {};
  }

  const layoutProps = {
    ...props,
    user,
    pressItem,
    openLogin,
    profileOptions: defineOptions(user?.name !== undefined, profileOptions),
  };

  return <Layout {...layoutProps} />;
};
