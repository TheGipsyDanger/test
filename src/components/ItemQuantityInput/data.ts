export interface IItemQuantityInput {
  data?: any;
  item: any;
  add(item: any): void;
  decrese(item: any): void;
}

export interface IItemQuantityInputLayout extends IItemQuantityInput {
  count: number;
  addCount(): void;
  decreaseCount(): void;
}

interface IITem {
  name: string;
  price: number;
}
