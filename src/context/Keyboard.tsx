import * as React from 'react';
import { Keyboard } from 'react-native';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { IKeyboardContext } from '~/utils';

export const KeyboardContext = createContext<IKeyboardContext>(
  {} as IKeyboardContext
);

export const KeyboardProvider: React.FC = ({ children }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  }, []);

  const keyboardDidShow = useCallback(
    (e: any) => {
      setKeyboardHeight(e.endCoordinates.height);
      setIsShow(true);
    },
    [setIsShow]
  );

  const keyboardDidHide = useCallback(() => {
    setIsShow(false);
  }, [setIsShow]);

  return (
    <KeyboardContext.Provider
      value={{
        isShow,
        keyboardHeight,
      }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export function useKeyboard(): IKeyboardContext {
  return useContext(KeyboardContext);
}
