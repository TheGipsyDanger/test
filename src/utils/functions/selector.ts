import { ISelectorItem } from '~/utils/interfaces/customTypes';

export const selectItem = (options: ISelectorItem[], indexToUse: number) => {
  return options.map((item, index) => ({
    ...item,
    isActive: index === indexToUse ? true : false,
  }));
};
