import { ISelectorItem } from '~/utils';

export const populateItemData = (data: string[]): ISelectorItem[] => {
  return data.map((item) => ({
    label: item,
    isActive: false,
  }));
};
