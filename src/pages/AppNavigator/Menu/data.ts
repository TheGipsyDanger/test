import { ICategory, IUser, IMenuCategory, IProduct } from '~/utils';
export interface IMenu {
  data: any;
}

export interface IMenuLayout extends IMenu {
  hasCategory: boolean;
  selectedCategory: ICategory;
  user: IUser;
  press(type: string): void;
  categories: ICategory[];
  menuCategory: IMenuCategory[];
  addItemOnCart(item: IProduct): void;
  openDetails(productId: string): void;
  defineCategory(category: ICategory): void;
}

export interface IMenuSubheader extends Pick<IMenuLayout, 'user' | 'press'> {}
export interface IMenuSubheader extends Pick<IMenuLayout, 'user' | 'press'> {}
