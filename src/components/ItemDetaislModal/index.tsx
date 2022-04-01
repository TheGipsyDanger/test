import * as React from 'react';
import { useState } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Modal } from '~/components/Basics/Modal';
import { Conditional } from '~/components/Basics/Conditional';
import { LoadingModal } from '~/components/LoadingModal';
import { useKeyboard, useItemDetails, useModal, useCart } from '~/context';
import { metrics } from '~/styles';
import { defineAdditionals } from '~/utils';

import { IItemDetaislModal } from '~/components/ItemDetaislModal/data';
import { ItemDetaislModal as Layout } from './Layout';

export const ItemDetaislModal = (props: IItemDetaislModal) => {
  const { isShow } = useKeyboard();
  const insets = useSafeAreaInsets();
  const {
    currentItem: item,
    combineItems,
    addCombineItems,
    decreaseCombineItems,
  } = useItemDetails();

  const { closeModal } = useModal();
  const { addItem } = useCart();

  const [count, setCount] = useState<number>(1);
  const [loadding, setLoading] = useState<boolean>(false);
  const [observation, setObservation] = useState<string>('');
  const [additionals, setAdditionals] = useState<any[]>([]);

  const [showFullImage, setShowFullImage] = useState<boolean>(false);

  function addCount() {
    count === 9 ? null : setCount((old) => old + 1);
  }

  function decreaseCount() {
    count === 0 ? null : setCount((old) => old - 1);
  }

  function itemListPress(id: number) {
    combineItems.includes(id) ? decreaseCombineItems(id) : addCombineItems(id);
  }

  function addItemOnCart() {
    setLoading(() => true);
    const itemAdditional = defineAdditionals(additionals);
    Array.from(Array(count)).forEach((_) => {
      addItem({ ...item, observation, extras: itemAdditional });
    });
    setTimeout(() => {
      setLoading(() => false);
      closeModal();
    }, 300);
  }

  function addAdditional(additional: any) {
    setAdditionals((prev) => [...prev, additional]);
  }

  function removeAdditional(additional: any) {
    setAdditionals((prev) => {
      const indexToRemoved = prev.findIndex(
        (item) => item.name == additional.name
      );
      return prev.filter((_, index) => index !== indexToRemoved);
    });
  }

  const modalSizes = {
    width: metrics.width,
    height:
      Platform.OS === 'ios' ? metrics.height : metrics.height - insets.top * 2,
  };

  const bottomCompensation = metrics.bottomSpotlight + insets.bottom;

  const layoutProps = {
    ...props,
    count,
    item,
    addCount,
    closeModal,
    modalSizes,
    observation,
    showFullImage,
    addAdditional,
    decreaseCount,
    itemListPress,
    addItemOnCart,
    setObservation,
    setShowFullImage,
    removeAdditional,
    bottomCompensation,
    keyboardIsShow: isShow,
  };

  return (
    <Modal hasClosableButton={false} avoidKeyboard={true}>
      <Conditional render={loadding}>
        <LoadingModal />
      </Conditional>
      <Layout {...layoutProps} />
    </Modal>
  );
};
