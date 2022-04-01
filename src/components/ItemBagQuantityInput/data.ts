export interface IItemBagQuantityInput {
  id: string;
  amount: number;
}

export interface IItemBagQuantityInputLayout extends IItemBagQuantityInput {
  count: number;
  addCount(): void;
  decreaseCount(): void;
}
