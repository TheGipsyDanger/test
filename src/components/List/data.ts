import { IListVariants, ICategory, IMenuCategory, IProduct } from '~/utils';
export interface IList {
  data: any[];
  title: string;
  onPress?: any;
  onPressTwo?: any;
  direction?: 'x' | 'y';
  variant: IListVariants;
}

export interface IListLayout extends IList {
  renderItem(props: any): JSX.Element;
  listDirection: { horizontal?: boolean; vertical?: boolean };
  showDetails: Boolean;
  description: string;
}

export interface IListLayoutCombine extends Pick<IList, 'onPress'> {
  index: number;
  isSelected: boolean;
}

export interface IListLayoutDetails extends Pick<IListLayout, 'description'> {
  name: string;
}
export interface IMenu extends ICategory, Pick<IList, 'onPress'> {
  setSelected: Function;
  selected?: string;
  index?: any;
}

export interface IMenuCategoryComponent
  extends IProduct,
    Pick<IList, 'onPress' | 'onPressTwo'> {}
