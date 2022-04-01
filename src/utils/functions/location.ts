import * as React from 'react';
import * as Location from 'expo-location';
import { useStorage } from './storage';

export const useLocations = () => {
  const { setStorage, getStorage, cleanStorage } = useStorage();

  async function get() {
    const shouldShowLocationModal = await getStorage('shouldShowLocationModal');

    if (shouldShowLocationModal?.status) {
      return { status: shouldShowLocationModal ? 'denied' : 'granted' };
    } else {
      let { status } = await Location.requestForegroundPermissionsAsync();

      setStorage(
        'shouldShowLocationModal',
        status !== 'granted' ? true : false
      );

      return { status: status === 'granted' ? 'granted' : 'denied' };
    }
  }

  async function currentPosition() {
    try {
      return await Location.getCurrentPositionAsync({});
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  async function set(status: boolean) {
    setStorage('shouldShowLocationModal', status);
  }

  return {
    get,
    set,
    currentPosition,
  };
};
