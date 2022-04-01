import { IProduct } from '~/utils';
export interface IItemDetaislModal {
  data?: any;
}
export interface IItemDetaislModalLayout extends IItemDetaislModal {
  showFullImage: boolean;
  keyboardIsShow: boolean;
  count: number;
  modalSizes: any;
  addCount(): void;
  closeModal(): void;
  item: IProduct;
  observation: string;
  setObservation(obs: string): void;
  addAdditional(additional: any): void;
  removeAdditional(additional: any): void;
  addItemOnCart(): void;
  itemListPress(id: number): void;
  decreaseCount(): void;
  bottomCompensation: number;
  setShowFullImage(status: boolean): void;
}

export interface IItemModalFullImage
  extends Pick<
    IItemDetaislModalLayout,
    'showFullImage' | 'setShowFullImage' | 'item'
  > {}

export interface IItemModalHeader {
  firstFunction?(): void;
  secondFunction?(): void;
}

export interface IItemModalFooter
  extends Pick<
    IItemDetaislModalLayout,
    'count' | 'addCount' | 'decreaseCount' | 'item' | 'addItemOnCart'
  > {}

export interface IItemModalForm
  extends Pick<
    IItemDetaislModalLayout,
    'addAdditional' | 'removeAdditional' | 'observation' | 'setObservation'
  > {}
export interface IItemModalInfos
  extends Pick<IItemDetaislModalLayout, 'item'> {}
export interface IItemModalSpotlight
  extends Pick<
    IItemDetaislModalLayout,
    'showFullImage' | 'setShowFullImage' | 'closeModal' | 'item'
  > {}

export interface IAdditional {
  title: number;
  price: number;
  amount: number;
}

export const additionals = [
  {
    name: 'Ovo',
    price: 2.9,
  },
  {
    name: 'Batata frita',
    price: 9.9,
  },
  {
    name: 'Bacon',
    price: 5.9,
  },
];
