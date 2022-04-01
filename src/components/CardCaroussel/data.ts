import { IWrappedSystem } from '~/utils';

export interface ICardCaroussel { }

export interface ICardCarousselLayout extends ICardCaroussel {
  data: ICard[];
  index: number;
  initial: number;
  cardsCount: number;
  hasOnlyOne: boolean;
  updateIndex(index: number): void;
}

export interface ICardCarousselCard extends IWrappedSystem, ICard { }

export interface ICardCarousselCardCount
  extends Pick<ICardCarousselLayout, 'cardsCount' | 'index' | 'data'> { }

export const data: ICard[] = [
  {
    text: '0001',
    flag: 'visa',
    principal: false,
  },
  {
    text: '0002',
    flag: 'master',
    principal: true,
  },
  {
    text: '0003',
    flag: 'express',
    principal: false,
  },
  {
    text: '0004',
    flag: 'visa',
    principal: false,
  },
];

export interface ICard {
  text: string;
  flag: string;
  principal: boolean;
}
