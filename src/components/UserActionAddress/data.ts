import { IAddressType } from '~/utils';
export interface IUserActionAddress {
  data?: any;
}

export interface IUserActionAddressLayout extends IUserActionAddress {
  t: any;
  data: IAddressType[];
  pressAddress(index: number): void;
}
