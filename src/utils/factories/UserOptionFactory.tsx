import { IUserOptionFactory } from '../interfaces/factories/UserOptionFactory';
import { useStorage } from '../functions/storage';
import { IUser } from '../interfaces/context/user';
import { getUser as getUserReq } from '../api/Auth';

export function createUserOptionFactory(): IUserOptionFactory {
  const { getStorage, setStorage } = useStorage();

  async function getUser() {
    const user = await getStorage('user');
    return user;
  }

  async function setUser(user: IUser) {
    await setStorage('user', user);
  }

  async function cleanUser() {
    await setStorage('user', {});
  }

  async function login(token: string) {
    try {
      const { result: user, payload } = await getUserReq(token);
      if (user?.name) {
        setUser({ ...user, email: payload.emails[0], token });
        return user;
      } else {
        throw Error('Service unavalable');
      }
    } catch (error) {
      throw Error('Service unavalable');
    }
  }

  return {
    login,
    getUser,
    setUser,
    cleanUser,
  };
}
