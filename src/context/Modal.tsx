import * as React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createContext, useContext, useState } from 'react';

import { IFunctions, IModalNames } from '~/utils';
import { metrics } from '~/styles';

export interface IModalContext {
  modalName: string;
  modalIsOpen: boolean;
  functions: IFunctions;
  closeModal(): void;
  modalSizes: {
    width: number;
    height: number;
  };
  defineCtx(ctx: string): void;
  openModal(name: IModalNames): void;
  defineFunctions(functions: IFunctions): void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const insets = useSafeAreaInsets();
  const [modalName, setModalName] = useState('default');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCtx, setModalCtx] = useState('');
  const [functions, setFunctions] = useState<IFunctions>([() => {}]);

  const openModal = (name: IModalNames) => {
    setModalName(name);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalName('default');
    setModalIsOpen(false);
    defineFunctions([() => null]);
  };

  const defineFunctions = (functions: IFunctions) => {
    setFunctions(functions);
  };

  const modalSizes = {
    width: metrics.width,
    height:
      Platform.OS === 'ios' ? metrics.height : metrics.height - insets.top * 2,
  };

  const defineCtx = (ctx: string) => {};

  return (
    <ModalContext.Provider
      value={{
        functions,
        openModal,
        modalName,
        defineCtx,
        closeModal,
        modalSizes,
        modalIsOpen,
        defineFunctions,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): IModalContext {
  return useContext(ModalContext);
}
