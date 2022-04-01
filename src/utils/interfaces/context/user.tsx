export interface IUserContext {
  user: IUser;
  token: string;
  setToken(token: string): void;
  setUser(user: IUser): void;
  isInitUser: boolean;
}

export interface IUser {
  email: string;
  id: string;
  name: string;
  phone: string;
  token: string;
}
