import * as React from 'react';
import { Platform, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';
import Constants from 'expo-constants';
import * as IntentLauncher from 'expo-intent-launcher';

import { Modal } from '~/components/Basics/Modal';

import { useModal } from '~/context';

import { IUserActionRequestLocationModal } from '~/components/UserActionRequestLocationModal/data';
import { UserActionRequestLocationModal as Layout } from './Layout';

export const UserActionRequestLocationModal = (
  props: IUserActionRequestLocationModal
) => {
  const { t } = useTranslation();
  const { closeModal } = useModal();

  function press() {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      const pkg = Constants?.manifest?.releaseChannel
        ? Constants?.manifest?.android?.package
        : 'host.exp.exponent';

      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
        { data: 'package:' + pkg }
      );
    }
  }

  const layoutProps = {
    ...props,
    t,
    press,
    closeModal,
  };

  return (
    <Modal bg="transparent" hasClosableButton={false} hasBackdrop={false}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
