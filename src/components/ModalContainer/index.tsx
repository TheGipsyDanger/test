import * as React from 'react';

import { useModal, useKeyboard } from '~/context';
import { equivalent } from '~/utils';
import { metrics } from '~/styles/metrics';

import { IModalContainer } from '~/components/ModalContainer/data';
import { ModalContainer as Layout } from './Layout';

export const ModalContainer = (props: IModalContainer) => {
  const { size = 100, isCenter } = props;

  const {
    modalSizes: { height },
  } = useModal();

  const { isIos } = metrics;

  const { keyboardHeight, isShow } = useKeyboard();

  const modalSize = equivalent(height, size);

  const keyboardVerticalOffset = isCenter
    ? (height - modalSize) / 2 + 10
    : height - modalSize + 10;

  const androidModalSize = isShow
    ? !isCenter
      ? modalSize - keyboardHeight + 44
      : modalSize
    : modalSize;

  const layoutProps = {
    ...props,
    isIos,
    isShow,
    modalSize,
    androidModalSize,
    keyboardVerticalOffset,
  };

  return <Layout {...layoutProps} />;
};
