import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FirstStep } from './Layout/FirstStep';
import { SecondStep } from './Layout/SecondStep';

import { useUser, useUserAction, useKeyboard } from '~/context';
import { StringToNumberMap } from '~/utils';

import { IQueue } from '~/pages/UserActionNavigator/Queue/data';
import { Queue as Layout } from './Layout';

export const Queue = (props: IQueue) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { isShow } = useKeyboard();
  const { addressTypes, personCount, setAddressTypes, setPersonCount } =
    useUserAction();

  const [id, setId] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const listRef = useRef<FlatList>();
  const { user } = useUser();

  useEffect(() => {
    setAddressTypes(
      addressTypes.map((item) => ({
        ...item,
        isSelected: false,
      }))
    );
  }, []);

  useEffect(() => {
    setShowToast(false);
  }, [addressTypes, id, personCount]);

  function cleanFlow() {
    setId('');
    setPersonCount('');
    setAddressTypes(
      addressTypes.map((item) => ({
        ...item,
        isSelected: false,
      }))
    );
  }

  function scrollListTo(index: number) {
    index === 0 && cleanFlow();
    listRef?.current?.scrollToIndex({
      index,
      animated: true,
    });
  }

  function press() {
    !checkFirstStep() && setShowToast(true);

    const nextStep: StringToNumberMap = {
      '0': 1,
      '1': 0,
    };

    const where = nextStep[step];

    if (step === 0) {
      if (checkFirstStep()) {
        setStep(where);
        return scrollListTo(where);
      } else {
        return setShowToast(true);
      }
    } else {
      setStep(where);
      return scrollListTo(where);
    }
  }

  function backPress() {
    const where = step !== 0 ? step - 1 : 0;
    step !== 0 ? scrollListTo(step - 1) : navigation.goBack();
    setStep(where);
  }

  function checkFirstStep() {
    const checkAddress = addressTypes.some((item) => item.isSelected);
    const checkId = id.length === 11;
    const checkPerson = personCount !== '';

    return !user.hasOwnProperty('name')
      ? checkAddress && checkId && checkPerson
      : checkAddress && checkPerson;
  }

  const layoutProps = {
    ...props,
    t,
    id,
    user,
    setId,
    press,
    toggle,
    listRef,
    backPress,
    setToggle,
    renderItem,
    showToast,
    setShowToast,
    hasKeyboard: isShow,
    isValid: checkFirstStep(),
    bottom: insets.bottom,
  };

  function renderItem(index: number) {
    const views: any = {
      0: <FirstStep {...layoutProps} />,
      1: <SecondStep {...layoutProps} />,
    };

    return views[index];
  }

  return <Layout {...layoutProps} />;
};
