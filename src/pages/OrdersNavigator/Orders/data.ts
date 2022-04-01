import { IResumeTypes } from '~/utils';

export interface IOrders {}

export interface IOrdersLayout extends IOrders {
  t: any;
  data?: any[];
  openResume(where: IResumeTypes): void;
  openOrderDetails(id: string): void;
}

export interface IOrdersLayoutEmpty extends Pick<IOrdersLayout, 't'> {}

export interface IOrdersLayoutLists extends IOrdersLayout {}

export interface IOrdersLayoutHistory
  extends Pick<IOrdersLayout, 't' | 'openResume'> {}
