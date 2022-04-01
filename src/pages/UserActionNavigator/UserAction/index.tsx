import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { FirstStep } from './Layout/FirstStep';
import { SecondStep } from './Layout/SecondStep';
import { ThirdStep } from './Layout/ThirdStep';
import {
  IType,
  IAddressType,
  IStringToBool,
  types as typesData,
  IAccordionPressResp,
  createUserActionFactory,
  ISelectPeriodTypeOptions,
  addressTypes as addressTypesData,
} from '~/utils';

import {
  useUser,
  useModal,
  useKeyboard,
  useUserAction,
  useSelectPeriod,
} from '~/context';

import {
  IUserAction,
  selectePeriodData,
} from '~/pages/UserActionNavigator/UserAction/data';
import { UserAction as Layout } from './Layout';

export const UserAction = (props: IUserAction) => {
  const { t } = useTranslation();
  const listRef = useRef<FlatList>();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const UserAction = createUserActionFactory();
  const { openModal } = useModal();

  const { date, setDate, setSelectedHour, selectedHour } = useSelectPeriod();
  const { user } = useUser();
  const { isShow } = useKeyboard();
  const {
    setUserActionInfosContext,
    ambient,
    personCount,
    setAmbient,
    setPersonCount,
  } = useUserAction();
  const [address, setAddress] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectType, setSelectType] = useState<string>('');
  const [types, setTypes] = useState<IType[]>(typesData);
  const [completedInfo, setCompletedInfo] = useState(false);
  const [obs, setObs] = useState<string>('');
  const [isChangeConsumption, setIsChangeConsumption] =
    useState<boolean>(false);
  const [selectPeriod, setSelectPeriod] =
    useState<ISelectPeriodTypeOptions>(selectePeriodData);

  const [addressTypes, setAddressTypes] =
    useState<IAddressType[]>(addressTypesData);

  useEffect(() => {
    if (completedInfo) {
      setCompletedInfo(false);
    }
  }, [address, addressTypes, selectedHour, date, personCount, ambient, types]);

  useEffect(() => {
    user?.name === undefined && openModal('RequestLoginModal');
  }, []);

  function pressType(index: number) {
    const { data, context } = UserAction.selectType(types, index);
    setSelectType(context.type as string);
    setTypes(data as IType[]);
  }

  function pressAddress(index: number) {
    const { data, context } = UserAction.selectAddress(addressTypes, index);
    setSelectType(context.type as string);
    setAddressTypes(data as IAddressType[]);
  }

  function press() {
    const { step, showInformationModal } = UserAction.changeStep();
    showInformationModal ? endFlow() : scrollListTo(step);
  }

  function alternativePress() {
    changeInfos();
  }

  function endFlow() {
    const Type = UserAction.getContext().type;
    switch (Type) {
      case 'reserve': {
        setShowInfoModal(true);
        setIsChangeConsumption(false);
        setUserActionInfosContext({
          text: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.SUCCESS_RESERVE',
          buttonText: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.BTN_SUCCESS_RESERVE',
          status: true,
        });
        break;
      }
      default: {
        setShowInfoModal(true);
        setIsChangeConsumption(false);
        setUserActionInfosContext({
          text: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.SUCCESS_DELIVERY',
          buttonText:
            'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.BTN_SUCCESS_DELIVERY',
          status: true,
        });
      }
    }
  }

  function changeInfos() {
    setShowInfoModal(true);
    setIsChangeConsumption(true);
    setUserActionInfosContext({
      text: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.CHANGE',
      buttonText: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.BTN_CHANGE',
      status: false,
    });
  }

  function changeAddress() {
    setShowInfoModal(true);
    setIsChangeConsumption(true);
    setUserActionInfosContext({
      text: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.CHANGE_RESTAURANT',
      buttonText: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.BTN_CHANGE',
      status: false,
    });
  }

  function changeLocation() {
    setShowInfoModal(true);
    setIsChangeConsumption(true);
    setUserActionInfosContext({
      text: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.CHANGE_LOCATION',
      buttonText: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.BTN_CHANGE',
      status: false,
    });
  }

  function cleanInfos() {
    setObs('');
    setAmbient('');
    setPersonCount('');
    setDate({});
    setSelectedHour('');
  }

  function backPress() {
    const { step } = UserAction.getContext();
    if (step === 0) {
      navigation.goBack();
    } else {
      const newStep = step - 1;
      scrollListTo(newStep);
      UserAction.updateContextStep(newStep);
      newStep == 0 && cleanInfos();
    }
  }

  function onClose(success: boolean) {
    setShowInfoModal(false);

    if (success) {
      navigation.navigate('Menu');
    }
  }

  function clearData(home = false) {
    scrollListTo(0);

    const { types: newTypes, address } = UserAction.cleanContext(
      types,
      addressTypes
    );

    setSelectType('');
    setTypes(newTypes);
    setAddressTypes(address);
    setShowInfoModal(false);
    cleanInfos();
  }

  function accordionPress(ctx: IAccordionPressResp) {
    setSelectPeriod((old) => ({
      ...old,
      //@ts-ignore
      [ctx?.id]: { isOpen: ctx.isOpen },
    }));
  }

  function openMap() {
    alert('task');
    navigation.navigate('MapModal');
  }

  function scrollListTo(index: number) {
    listRef?.current?.scrollToIndex({
      index,
      animated: true,
    });
  }

  function checkFirstStep() {
    return !(
      types.find((item) => item?.isSelected) &&
      addressTypes.find((item) => item?.isSelected)
    );
  }

  function checkSecondtStep(type: string | null) {
    const types: IStringToBool = {
      delivery: true,
      reserve:
        selectedHour !== '' &&
        Object.keys(date).length > 0 &&
        ambient !== '' &&
        personCount !== '',
      withdrawal: selectedHour !== '' && Object.keys(date).length > 0,
    };

    return !types[type as string];
  }

  function isDisabled() {
    const { step, type } = UserAction.getContext();

    const disabled: IStringToBool = {
      '0': checkFirstStep(),
      '1': checkSecondtStep(type),
    };

    return disabled[step] || false;
  }

  function onPressError() {
    setCompletedInfo(!completedInfo);
  }

  function getStep() {
    const { step } = UserAction.getContext();
    return step;
  }

  const layoutProps = {
    ...props,
    t,
    id,
    types,
    setId,
    date,
    user,
    press,
    address,
    listRef,
    obs,
    setObs,
    toggle,
    ambient,
    onClose,
    clearData,
    pressType,
    setAddress,
    setToggle,
    openMap,
    changeLocation,
    backPress,
    renderItem,
    selectType,
    changeInfos,
    pressAddress,
    personCount,
    selectPeriod,
    selectedHour,
    showInfoModal,
    setShowInfoModal,
    accordionPress,
    step: getStep(),
    bottom: insets.bottom,
    top: insets.top,
    addressData: addressTypes,
    alternativePress,
    changeAddress,
    disabled: isDisabled(),
    hasKeyboard: isShow,
    isChangeConsumption,
    onPressError: onPressError,
    completedInfo: completedInfo,
  };

  function renderItem(index: number) {
    const views: any = {
      0: <FirstStep {...layoutProps} />,
      1: <SecondStep {...layoutProps} />,
      2: <ThirdStep {...layoutProps} />,
    };
    return views[index];
  }

  return <Layout {...layoutProps} />;
};
