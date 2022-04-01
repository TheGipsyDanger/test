import { ISelectorItem } from '~/utils';

export interface ISelector {
  data: ISelectorItem[];
  action(index: number): void;
}

export interface ISelectorLayout extends ISelector {}

export const selectItem = (options: ISelectorItem[], indexToUse: number) => {
  return options.map((item, index) => ({
    ...item,
    isActive: index === indexToUse ? true : false,
  }));
};
