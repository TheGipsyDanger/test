import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

import { IUserContext, IUser, createUserOptionFactory } from '~/utils';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const { getUser, login, setUser: setUserStorage } = createUserOptionFactory();

  const [isInitUser, setIsInitUser] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const actualUser = await getUser();
    if (actualUser?.token !== undefined) {
      const token = actualUser.token;
      try {
        const user = await login(actualUser.token);
        setUser({ ...user, token });
        setUserStorage({ ...user, token });
      } catch (error) {
        clean();
      }
    } else {
      clean();
    }

    setIsInitUser(true);
  }

  function clean() {
    setUser({} as IUser);
    setUserStorage({} as IUser);
  }

  return (
    <UserContext.Provider
      value={{ token, setToken, user, setUser, isInitUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContext {
  return useContext(UserContext);
}
