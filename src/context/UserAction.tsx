import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import {
  IAddressType,
  IUserViewOptions,
  IUserActionContext,
  addressTypes as addressTypesData,
  IUserActionInfosContext,
} from '~/utils';

export const UserActionContext = createContext<IUserActionContext>(
  {} as IUserActionContext
);

export const UserActionProvider: React.FC = ({ children }) => {
  const [userActionInfosContext, setUserActionInfosContext] =
    useState<IUserActionInfosContext>({
      text: '',
      buttonText: '',
      status: false,
    });

  const [addressTypes, setAddressTypes] =
    useState<IAddressType[]>(addressTypesData);

  const [ambient, setAmbient] = useState<string>('');
  const [personCount, setPersonCount] = useState<string>('');
  const [firstView, setFirstView] = useState<IUserViewOptions>('UserAction');

  return (
    <UserActionContext.Provider
      value={{
        userActionInfosContext,
        setUserActionInfosContext,
        ambient,
        setAmbient,
        personCount,
        setPersonCount,
        firstView,
        setFirstView,
        addressTypes,
        setAddressTypes,
      }}>
      {children}
    </UserActionContext.Provider>
  );
};

export function useUserAction(): IUserActionContext {
  return useContext(UserActionContext);
}
