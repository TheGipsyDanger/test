import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { Linking } from 'react-native';
import Constants from 'expo-constants';
import * as IntentLauncher from 'expo-intent-launcher';

import { useRequestLoscation, useModal } from '~/context';
import { IElementMap, navigate, useLocations } from '~/utils';
import { Modal } from '~/components/Basics/Modal';
import { Welcome } from './Layout/Welcome';
import { ZipRequest } from './Layout/ZipRequest';
import { Request } from './Layout/Request';

import { IRequestLocationModal } from '~/components/RequestLocationModal/data';
import { RequestLocationModal as Layout } from './Layout';

export const RequestLocationModal = (props: IRequestLocationModal) => {
  const locationRef = useRef(null);
  const [location, setLocation] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [address, setAddress] = useState<object>({});

  const { set } = useLocations();
  const { step, setStep } = useRequestLoscation();

  const { modalSizes, closeModal } = useModal();

  useEffect(() => {
    setShowOptions(input !== '' && input.length < 10);
  }, [input]);

  function doMeasure() {
    //@ts-ignore
    locationRef?.current?.measure((fx, fy, width, height, px, py) => {
      setLocation(height - 20);
    });
  }

  function setAddressOption(address: { address: string }) {
    setAddress(address);
    setInput(address?.address);
    setShowOptions(false);
  }

  function goToStep(step: number) {
    setStep(step);
  }

  function goToApp() {
    closeModal();
    set(false);
    navigate('App', {});
  }

  const pkg = Constants?.manifest?.releaseChannel
    ? Constants?.manifest?.android?.package
    : 'host.exp.exponent';

  function openInternal() {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
        { data: 'package:' + pkg }
      );
    }
  }

  const viewProps = {
    ...props,
    locationRef,
    location,
    doMeasure,
    goToStep,
    modalSizes,
    openInternal,
    input,
    goToApp,
    setInput,
    address,
    showOptions,
    setAddressOption,
  };

  const steps: IElementMap = {
    0: <Request {...viewProps} />,
    1: <Welcome {...viewProps} />,
    2: <ZipRequest {...viewProps} />,
  };

  const layoutProps = {
    ...viewProps,
    currentModal: steps[step],
  };

  return (
    <Modal
      bg="transparent"
      hasClosableButton={false}
      avoidKeyboard={true}
      type={step === 0 ? 'full' : 'default'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
