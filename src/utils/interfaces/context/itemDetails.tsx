import { IProduct } from '~/utils';
export interface IItemDetailsContext {
  combineItems: number[];
  currentItem: IProduct;
  setCurrentItem(item: IProduct): void;
  addCombineItems(id: number): void;
  decreaseCombineItems(id: number): void;
}
