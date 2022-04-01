import { IWrappedSystem } from '~/utils';

export interface ICart {}
export interface ICartLayout extends IWrappedSystem, ICart {
  t: any;
  add(): void;
  itens: any[];
  isOpened: boolean;
  setIsOpened: any;
  toggle: boolean;
  obs: any;
  updateObs: any;
  setToogle(value: boolean): void;
}

export interface ICartSwitch
  extends IWrappedSystem,
    Pick<ICartLayout, 't' | 'toggle' | 'setToogle'> {}
export interface ICartAddProduct
  extends IWrappedSystem,
    Pick<ICartLayout, 't' | 'add'> {}
