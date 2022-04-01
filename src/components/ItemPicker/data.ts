import { ISelectorItem } from '~/utils';

export interface IItemPicker {
  type: 'ambient' | 'person';
  numOfLines?: number;
  strong?: boolean;
}

export interface IItemPickerLayout extends IItemPicker {
  list: ISelectorItem[][];
  press(list: number, item: string): void;
}

export const personData: string[] = [
  'até 2',
  'até 4',
  'até 6',
  'até 8',
  'até 10',
  'até 12',
  'até 14',
  'até 16',
];

export const ambientData: string[] = [
  'Salão',
  'Balcão',
  'Sacada',
  'Mezanino',
  'Pátio',
];
